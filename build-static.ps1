# Static Export Build Script
# This script temporarily moves admin/API routes, builds the static site, then restores them

Write-Host "Starting static export build..." -ForegroundColor Cyan

# Create backup directory
$backupDir = ".\_build_backup"
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
}

# Move API and admin folders
Write-Host "Temporarily moving API and admin routes..." -ForegroundColor Yellow
if (Test-Path "app\api") {
    Move-Item -Path "app\api" -Destination "$backupDir\api" -Force
}
if (Test-Path "app\admin") {
    Move-Item -Path "app\admin" -Destination "$backupDir\admin" -Force
}

# Build the static site
Write-Host "Building static site..." -ForegroundColor Green
npm run build

$buildSuccess = $LASTEXITCODE -eq 0

# Restore API and admin folders
Write-Host "Restoring API and admin routes..." -ForegroundColor Yellow
if (Test-Path "$backupDir\api") {
    Move-Item -Path "$backupDir\api" -Destination "app\api" -Force
}
if (Test-Path "$backupDir\admin") {
    Move-Item -Path "$backupDir\admin" -Destination "app\admin" -Force
}

# Clean up backup directory
Remove-Item -Path $backupDir -Force -Recurse

if ($buildSuccess) {
    Write-Host ""
    Write-Host "Static export completed successfully!" -ForegroundColor Green
    Write-Host "Your static site is in the 'out' folder" -ForegroundColor Cyan
}
else {
    Write-Host ""
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}
