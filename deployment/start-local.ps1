param(
  [string]$ImageName = "spectre:local",
  [string]$EnvFile = "$PSScriptRoot\.env.runtime",
  [int]$HostPort = 8080
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $EnvFile)) {
  throw "Runtime environment file not found: $EnvFile"
}

docker run --rm --env-file $EnvFile -p "${HostPort}:8080" $ImageName
