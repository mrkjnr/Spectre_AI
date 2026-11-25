variable "name_prefix" { type = string }
variable "location" { type = string }
variable "resource_group_name" { type = string }
variable "administrator_login" { type = string }
variable "sku_name" { type = string }
variable "storage_mb" { type = number }
variable "zone" {
  type    = string
  default = null
}
variable "subnet_id" { type = string }
variable "private_dns_zone_id" { type = string }
variable "tags" { type = map(string) }

resource "random_password" "postgres" {
  length           = 32
  special          = true
  override_special = "!#$%&()*+-=?[]^_{}"
}

resource "azurerm_postgresql_flexible_server" "this" {
  name                          = "${var.name_prefix}-pg"
  resource_group_name           = var.resource_group_name
  location                      = var.location
  administrator_login           = var.administrator_login
  administrator_password        = random_password.postgres.result
  sku_name                      = var.sku_name
  storage_mb                    = var.storage_mb
  version                       = "16"
  zone                          = var.zone
  public_network_access_enabled = false
  backup_retention_days         = 35
  geo_redundant_backup_enabled  = true
  tags                          = var.tags
}

resource "azurerm_postgresql_flexible_server_database" "spectre" {
  name      = "spectre"
  server_id = azurerm_postgresql_flexible_server.this.id
  charset   = "UTF8"
  collation = "en_US.utf8"
}

resource "azurerm_private_endpoint" "postgres" {
  name                = "${var.name_prefix}-pg-pe"
  location            = var.location
  resource_group_name = var.resource_group_name
  subnet_id           = var.subnet_id
  private_service_connection {
    name                           = "postgresql"
    private_connection_resource_id = azurerm_postgresql_flexible_server.this.id
    subresource_names              = ["postgresqlServer"]
    is_manual_connection           = false
  }
  private_dns_zone_group {
    name                 = "postgresql"
    private_dns_zone_ids = [var.private_dns_zone_id]
  }
  tags = var.tags
}

output "server_name" { value = azurerm_postgresql_flexible_server.this.name }
output "fqdn" { value = azurerm_postgresql_flexible_server.this.fqdn }
output "database_name" { value = azurerm_postgresql_flexible_server_database.spectre.name }
output "administrator_password" {
  value     = random_password.postgres.result
  sensitive = true
}
