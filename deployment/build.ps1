param(
  [string]$ImageName = "spectre:local",
  [string]$Dockerfile = "Dockerfile.azure"
)

$ErrorActionPreference = "Stop"
Set-Location (Resolve-Path "$PSScriptRoot\..")

if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
  throw "Docker is required."
}

docker build --file $Dockerfile --tag $ImageName .
Write-Host "Built $ImageName"
