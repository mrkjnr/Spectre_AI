variable "name_prefix" { type = string }
variable "location" { type = string }
variable "resource_group_name" { type = string }
variable "subnet_id" { type = string }
variable "identity_id" { type = string }
variable "identity_client_id" { type = string }
variable "workspace_id" { type = string }
variable "app_insights_connection_string" {
  type      = string
  sensitive = true
}
variable "acr_login_server" { type = string }
variable "image_name" { type = string }
variable "cpu" { type = number }
variable "memory" { type = string }
variable "min_replicas" { type = number }
variable "max_replicas" { type = number }
variable "database_url" {
  type      = string
  sensitive = true
}
variable "setup_code" {
  type      = string
  sensitive = true
}
variable "ai_base_url" { type = string }
variable "ai_api_key" {
  type      = string
  sensitive = true
}
variable "ai_model" { type = string }
variable "tags" { type = map(string) }

resource "azurerm_container_app_environment" "this" {
  name                           = "${var.name_prefix}-cae"
  location                       = var.location
  resource_group_name            = var.resource_group_name
  infrastructure_subnet_id       = var.subnet_id
  log_analytics_workspace_id     = var.workspace_id
  internal_load_balancer_enabled = false
  tags                           = var.tags
}

resource "azurerm_container_app" "this" {
  name                         = "${var.name_prefix}-app"
  resource_group_name          = var.resource_group_name
  container_app_environment_id = azurerm_container_app_environment.this.id
  revision_mode                = "Single"
  tags                         = var.tags

  identity {
    type         = "UserAssigned"
    identity_ids = [var.identity_id]
  }

  template {
    min_replicas = var.min_replicas
    max_replicas = var.max_replicas

    container {
      name   = "spectre"
      image  = "${var.acr_login_server}/${var.image_name}"
      cpu    = var.cpu
      memory = var.memory

      env {
        name  = "NODE_ENV"
        value = "production"
      }
      env {
        name  = "PORT"
        value = "8080"
      }
      env {
        name  = "STATIC_DIR"
        value = "/app/artifacts/sentinel/dist/public"
      }
      env {
        name  = "BASE_PATH"
        value = "/"
      }
      env {
        name  = "AZURE_CLIENT_ID"
        value = var.identity_client_id
      }
      env {
        name  = "APPLICATIONINSIGHTS_CONNECTION_STRING"
        value = var.app_insights_connection_string
      }
      env {
        name        = "DATABASE_URL"
        secret_name = "database-url"
      }
      env {
        name        = "SPECTRE_SETUP_CODE"
        secret_name = "setup-code"
      }
      env {
        name        = "AI_INTEGRATIONS_OPENAI_BASE_URL"
        secret_name = "ai-base-url"
      }
      env {
        name        = "AI_INTEGRATIONS_OPENAI_API_KEY"
        secret_name = "ai-api-key"
      }
      env {
        name  = "AI_MODEL"
        value = var.ai_model
      }
    }

    http_scale_rule {
      name                = "http-concurrency"
      concurrent_requests = "20"
    }
  }

  secret {
    name  = "database-url"
    value = var.database_url
  }
  secret {
    name  = "setup-code"
    value = var.setup_code
  }
  secret {
    name  = "ai-base-url"
    value = var.ai_base_url
  }
  secret {
    name  = "ai-api-key"
    value = var.ai_api_key
  }

  ingress {
    external_enabled = true
    target_port      = 8080
    transport        = "http"
    traffic_weight {
      latest_revision = true
      percentage      = 100
    }
  }

  registry {
    server   = var.acr_login_server
    identity = var.identity_id
  }
}

output "environment_id" { value = azurerm_container_app_environment.this.id }
output "app_id" { value = azurerm_container_app.this.id }
output "fqdn" { value = azurerm_container_app.this.latest_revision_fqdn }
