locals {
  name_prefix = "${var.project}-${var.environment}"
  tags = merge({
    application = "SPECTRE-AI"
    environment = var.environment
    managedBy   = "Terraform"
  }, var.tags)
}
