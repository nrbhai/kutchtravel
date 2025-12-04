# Deployment script for Kutch Travel website
# This script will SSH into the server and deploy the latest changes

$serverIP = "72.61.172.175"
$username = "root"
$password = "Nrbhai@220171"

Write-Host "🚀 Starting deployment to $serverIP..." -ForegroundColor Cyan

# Create deployment commands
$deployCommands = @"
cd ~/kutchtravel
git pull origin main
npm install
npm run build
pm2 restart kutchtravel
"@

# Use plink (PuTTY) or ssh with password
Write-Host "📦 Pulling latest changes and rebuilding..." -ForegroundColor Yellow

# Execute via SSH (requires sshpass or manual password entry)
ssh root@$serverIP @"
cd ~/kutchtravel
git pull origin main
npm install
npm run build
pm2 restart kutchtravel
"@

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Your website should now be updated at http://$serverIP" -ForegroundColor Cyan
