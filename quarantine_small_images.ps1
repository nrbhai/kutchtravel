$sourceDir = "public/images"
$backupDir = "public/images/_low_res_backup"
$limit = 100KB

# Create backup directory if it doesn't exist
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
}

$images = Get-ChildItem -Path $sourceDir -Recurse -Include *.jpg, *.jpeg, *.png, *.webp, *.avif, *.JPG, *.PNG

foreach ($img in $images) {
    # Skip the backup directory itself
    if ($img.FullName.StartsWith((Resolve-Path $backupDir).Path)) {
        continue
    }

    if ($img.Length -lt $limit) {
        # Calculate relative path to preserve structure
        $relativePath = $img.FullName.Substring((Resolve-Path $sourceDir).Path.Length + 1)
        $destPath = Join-Path $backupDir $relativePath
        $destParent = Split-Path $destPath

        if (-not (Test-Path $destParent)) {
            New-Item -ItemType Directory -Path $destParent -Force | Out-Null
        }

        Write-Host "Moving $($img.FullName) to $destPath"
        Move-Item -Path $img.FullName -Destination $destPath
    }
}

Write-Host "Quarantine complete."
