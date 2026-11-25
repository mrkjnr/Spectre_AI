variable "name_prefix" { type = string }
variable "location" { type = string }
variable "resource_group_name" { type = string }
variable "tags" { type = map(string) }

resource "azurerm_user_assigned_identity" "app" {
  name                = "${var.name_prefix}-app-id"
  location            = var.location
  resource_group_name = var.resource_group_name
  tags                = var.tags
}

output "id" { value = azurerm_user_assigned_identity.app.id }
output "principal_id" { value = azurerm_user_assigned_identity.app.principal_id }
output "client_id" { value = azurerm_user_assigned_identity.app.client_id }
