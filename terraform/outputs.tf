output "resource_group_name" { value = azurerm_resource_group.this.name }
output "container_app_fqdn" { value = module.app.fqdn }
output "container_registry" { value = module.registry_storage.acr_login_server }
output "postgres_server_fqdn" {
  value     = module.data.fqdn
  sensitive = true
}
output "key_vault_uri" { value = module.keyvault.uri }
output "log_analytics_workspace_id" { value = module.observability.workspace_id }
