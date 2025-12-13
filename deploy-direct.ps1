# Direct Deployment Script (Bypassing Git)
# This script zips your local files, uploads them to the server, and rebuilds the site.

$serverIP = "72.61.172.175"
$username = "root"
$remotePath = "/root/kutchtravel"
$tarFile = "deploy.tar.gz"

Write-Host "🚀 Starting direct deployment to $serverIP..." -ForegroundColor Cyan

# 1. Create Tarball
Write-Host "📦 Compressing files..." -ForegroundColor Yellow
# Exclude heavy/unnecessary folders
tar --exclude "node_modules" --exclude ".git" --exclude ".next" --exclude ".vercel" --exclude ".idea" --exclude "$tarFile" -czf $tarFile .

if (-not (Test-Path $tarFile)) {
    Write-Error "Failed to create tarball!"
    exit 1
}

# 2. Upload to Server
Write-Host "📤 Uploading to server (you may be asked for password)..." -ForegroundColor Yellow
scp $tarFile ${username}@${serverIP}:${remotePath}/$tarFile

if ($LASTEXITCODE -ne 0) {
    Write-Error "Upload failed!"
    Remove-Item $tarFile
    exit 1
}

# 3. Extract and Build on Server
Write-Host "🛠️  Extracting and building on server..." -ForegroundColor Yellow
$commands = "cd $remotePath && tar -xzf $tarFile && npm install && npm run build && pm2 restart kutchtravel && rm $tarFile"

ssh ${username}@${serverIP} $commands

if ($LASTEXITCODE -ne 0) {
    Write-Error "Remote build failed!"
} else {
    Write-Host "✅ Deployment complete!" -ForegroundColor Green
    Write-Host "🌐 Website updated at http://$serverIP" -ForegroundColor Cyan
}

# Cleanup
Remove-Item $tarFile
