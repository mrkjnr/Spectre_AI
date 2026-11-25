variable "environment" {
  type        = string
  description = "Deployment environment (dev, uat, or prod)"
  validation {
    condition     = contains(["dev", "uat", "prod"], var.environment)
    error_message = "environment must be dev, uat, or prod."
  }
}

variable "location" { type = string }
variable "project" {
  type    = string
  default = "spectre"
}

variable "address_space" {
  type    = list(string)
  default = ["10.40.0.0/16"]
}

variable "container_apps_subnet_cidr" {
  type    = string
  default = "10.40.0.0/23"
}

variable "private_endpoints_subnet_cidr" {
  type    = string
  default = "10.40.2.0/24"
}

variable "postgres_administrator_login" {
  type      = string
  sensitive = true
  default   = "spectreadmin"
}

variable "postgres_sku" {
  type    = string
  default = "B_Standard_B1ms"
}

variable "postgres_storage_mb" {
  type    = number
  default = 32768
}

variable "postgres_zone" {
  type    = string
  default = null
}

variable "container_app_cpu" {
  type    = number
  default = 1
}

variable "container_app_memory" {
  type    = string
  default = "2Gi"
}

variable "container_app_min_replicas" {
  type    = number
  default = 1
}

variable "container_app_max_replicas" {
  type    = number
  default = 3
}

variable "image_name" {
  type        = string
  description = "ACR image reference including tag or digest"
  default     = "spectre:latest"
}

variable "acr_sku" {
  type    = string
  default = "Premium"
}

variable "key_vault_administrator_object_ids" {
  type    = list(string)
  default = []
}

variable "allowed_ingress_cidrs" {
  type    = list(string)
  default = ["0.0.0.0/0"]
}

variable "public_network_access_enabled" {
  type    = bool
  default = false
}

variable "enable_front_door" {
  type    = bool
  default = true
}

variable "custom_domain" {
  type    = string
  default = ""
}

variable "tags" {
  type    = map(string)
  default = {}
}

variable "ai_base_url" {
  type      = string
  sensitive = true
  default   = ""
}

variable "ai_api_key" {
  type      = string
  sensitive = true
  default   = ""
}

variable "ai_model" {
  type    = string
  default = "spectre-chat"
}

variable "alert_email_receivers" {
  type = list(object({
    name  = string
    email = string
  }))
  default = []
}

