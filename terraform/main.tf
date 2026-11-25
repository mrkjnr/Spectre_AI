data "azurerm_client_config" "current" {}

resource "azurerm_resource_group" "this" {
  name     = "${local.name_prefix}-rg"
  location = var.location
  tags     = local.tags
}

module "networking" {
  source                 = "./modules/networking"
  name_prefix            = local.name_prefix
  location               = var.location
  resource_group_name    = azurerm_resource_group.this.name
  address_space          = var.address_space
  container_apps_cidr    = var.container_apps_subnet_cidr
  private_endpoints_cidr = var.private_endpoints_subnet_cidr
  tags                   = local.tags
}

resource "azurerm_private_dns_zone" "postgres" {
  name                = "privatelink.postgres.database.azure.com"
  resource_group_name = azurerm_resource_group.this.name
  tags                = local.tags
}

resource "azurerm_private_dns_zone" "keyvault" {
  name                = "privatelink.vaultcore.azure.net"
  resource_group_name = azurerm_resource_group.this.name
  tags                = local.tags
}

resource "azurerm_private_dns_zone" "acr" {
  name                = "privatelink.azurecr.io"
  resource_group_name = azurerm_resource_group.this.name
  tags                = local.tags
}

resource "azurerm_private_dns_zone" "blob" {
  name                = "privatelink.blob.core.windows.net"
  resource_group_name = azurerm_resource_group.this.name
  tags                = local.tags
}

resource "azurerm_private_dns_zone_virtual_network_link" "postgres" {
  name                  = "postgres-vnet-link"
  resource_group_name   = azurerm_resource_group.this.name
  private_dns_zone_name = azurerm_private_dns_zone.postgres.name
  virtual_network_id    = module.networking.vnet_id
  registration_enabled  = false
  tags                  = local.tags
}

resource "azurerm_private_dns_zone_virtual_network_link" "keyvault" {
  name                  = "keyvault-vnet-link"
  resource_group_name   = azurerm_resource_group.this.name
  private_dns_zone_name = azurerm_private_dns_zone.keyvault.name
  virtual_network_id    = module.networking.vnet_id
  registration_enabled  = false
  tags                  = local.tags
}

resource "azurerm_private_dns_zone_virtual_network_link" "acr" {
  name                  = "acr-vnet-link"
  resource_group_name   = azurerm_resource_group.this.name
  private_dns_zone_name = azurerm_private_dns_zone.acr.name
  virtual_network_id    = module.networking.vnet_id
  registration_enabled  = false
  tags                  = local.tags
}

resource "azurerm_private_dns_zone_virtual_network_link" "blob" {
  name                  = "blob-vnet-link"
  resource_group_name   = azurerm_resource_group.this.name
  private_dns_zone_name = azurerm_private_dns_zone.blob.name
  virtual_network_id    = module.networking.vnet_id
  registration_enabled  = false
  tags                  = local.tags
}

module "observability" {
  source              = "./modules/observability"
  name_prefix         = local.name_prefix
  location            = var.location
  resource_group_name = azurerm_resource_group.this.name
  tags                = local.tags
}

module "identity" {
  source              = "./modules/identity"
  name_prefix         = local.name_prefix
  location            = var.location
  resource_group_name = azurerm_resource_group.this.name
  tags                = local.tags
}

module "keyvault" {
  source                   = "./modules/keyvault"
  name_prefix              = local.name_prefix
  location                 = var.location
  resource_group_name      = azurerm_resource_group.this.name
  tenant_id                = data.azurerm_client_config.current.tenant_id
  subnet_id                = module.networking.private_endpoints_subnet_id
  private_dns_zone_id      = azurerm_private_dns_zone.keyvault.id
  administrator_object_ids = var.key_vault_administrator_object_ids
  tags                     = local.tags
}

module "registry_storage" {
  source                   = "./modules/registry-storage"
  name_prefix              = local.name_prefix
  location                 = var.location
  resource_group_name      = azurerm_resource_group.this.name
  acr_sku                  = var.acr_sku
  subnet_id                = module.networking.private_endpoints_subnet_id
  acr_private_dns_zone_id  = azurerm_private_dns_zone.acr.id
  blob_private_dns_zone_id = azurerm_private_dns_zone.blob.id
  tags                     = local.tags
}

module "data" {
  source              = "./modules/data"
  name_prefix         = local.name_prefix
  location            = var.location
  resource_group_name = azurerm_resource_group.this.name
  administrator_login = var.postgres_administrator_login
  sku_name            = var.postgres_sku
  storage_mb          = var.postgres_storage_mb
  zone                = var.postgres_zone
  subnet_id           = module.networking.private_endpoints_subnet_id
  private_dns_zone_id = azurerm_private_dns_zone.postgres.id
  tags                = local.tags
}

resource "random_password" "setup_code" {
  length           = 48
  special          = true
  override_special = "!#$%&()*+-=?[]^_{}"
}

resource "azurerm_key_vault_secret" "database_url" {
  name         = "database-url"
  value        = "postgresql://${var.postgres_administrator_login}:${urlencode(module.data.administrator_password)}@${module.data.fqdn}:5432/${module.data.database_name}?sslmode=require"
  key_vault_id = module.keyvault.id
  depends_on   = [module.keyvault]
}

resource "azurerm_key_vault_secret" "setup_code" {
  name         = "spectre-setup-code"
  value        = random_password.setup_code.result
  key_vault_id = module.keyvault.id
  depends_on   = [module.keyvault]
}

resource "azurerm_key_vault_secret" "ai_key" {
  count        = var.ai_api_key != "" ? 1 : 0
  name         = "azure-openai-api-key"
  value        = var.ai_api_key
  key_vault_id = module.keyvault.id
  depends_on   = [module.keyvault]
}

resource "azurerm_role_assignment" "app_acr_pull" {
  scope                = module.registry_storage.acr_id
  role_definition_name = "AcrPull"
  principal_id         = module.identity.principal_id
}

resource "azurerm_role_assignment" "app_kv_secrets" {
  scope                = module.keyvault.id
  role_definition_name = "Key Vault Secrets User"
  principal_id         = module.identity.principal_id
}

module "app" {
  source                         = "./modules/app"
  name_prefix                    = local.name_prefix
  location                       = var.location
  resource_group_name            = azurerm_resource_group.this.name
  subnet_id                      = module.networking.container_apps_subnet_id
  identity_id                    = module.identity.id
  identity_client_id             = module.identity.client_id
  workspace_id                   = module.observability.workspace_id
  app_insights_connection_string = module.observability.connection_string
  acr_login_server               = module.registry_storage.acr_login_server
  image_name                     = var.image_name
  cpu                            = var.container_app_cpu
  memory                         = var.container_app_memory
  min_replicas                   = var.container_app_min_replicas
  max_replicas                   = var.container_app_max_replicas
  database_url                   = azurerm_key_vault_secret.database_url.value
  setup_code                     = azurerm_key_vault_secret.setup_code.value
  ai_base_url                    = var.ai_base_url
  ai_api_key                     = var.ai_api_key
  ai_model                       = var.ai_model
  tags                           = local.tags

  depends_on = [
    azurerm_role_assignment.app_acr_pull,
    azurerm_role_assignment.app_kv_secrets
  ]
}

resource "azurerm_monitor_action_group" "critical" {
  name                = "${local.name_prefix}-critical"
  resource_group_name = azurerm_resource_group.this.name
  short_name          = substr(local.name_prefix, 0, 12)

  dynamic "email_receiver" {
    for_each = var.alert_email_receivers
    content {
      name                    = email_receiver.value.name
      email_address           = email_receiver.value.email
      use_common_alert_schema = true
    }
  }
  tags = local.tags
}

resource "azurerm_monitor_scheduled_query_rules_alert_v2" "readyz" {
  name                = "${local.name_prefix}-readyz-failed"
  resource_group_name = azurerm_resource_group.this.name
  location            = var.location
  scopes              = [module.observability.workspace_id]
  severity            = 1
  enabled             = true
  description         = "Container App readiness or health log indicates repeated failures"

  criteria {
    query                   = <<-KQL
      ContainerAppConsoleLogs_CL
      | where TimeGenerated > ago(10m)
      | where Log_s has "ready" or Log_s has "health"
      | where Log_s has "503" or Log_s has "error"
      | summarize count() by bin(TimeGenerated, 5m)
      | project count_, TimeGenerated
    KQL
    time_aggregation_method = "Count"
    operator                = "GreaterThan"
    threshold               = 5
    failing_periods {
      minimum_failing_periods_to_trigger_alert = 2
      number_of_evaluation_periods             = 3
    }
  }

  evaluation_frequency    = "PT5M"
  window_duration         = "PT15M"
  auto_mitigation_enabled = true

  action {
    action_groups = [azurerm_monitor_action_group.critical.id]
  }
  tags = local.tags
}

resource "azurerm_monitor_diagnostic_setting" "postgres" {
  name                       = "postgres-diagnostics"
  target_resource_id         = "/subscriptions/${data.azurerm_client_config.current.subscription_id}/resourceGroups/${azurerm_resource_group.this.name}/providers/Microsoft.DBforPostgreSQL/flexibleServers/${module.data.server_name}"
  log_analytics_workspace_id = module.observability.workspace_id
  enabled_log {
    category = "PostgreSQLLogs"
  }
  enabled_metric {
    category = "AllMetrics"
  }
}

resource "azurerm_monitor_diagnostic_setting" "keyvault" {
  name                       = "keyvault-diagnostics"
  target_resource_id         = module.keyvault.id
  log_analytics_workspace_id = module.observability.workspace_id
  enabled_log {
    category = "AuditEvent"
  }
  enabled_metric {
    category = "AllMetrics"
  }
}

resource "azurerm_monitor_diagnostic_setting" "acr" {
  name                       = "acr-diagnostics"
  target_resource_id         = module.registry_storage.acr_id
  log_analytics_workspace_id = module.observability.workspace_id
  enabled_log {
    category = "ContainerRegistryRepositoryEvents"
  }
  enabled_log {
    category = "ContainerRegistryLoginEvents"
  }
  enabled_metric {
    category = "AllMetrics"
  }
}
