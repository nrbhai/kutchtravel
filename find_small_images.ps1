$images = Get-ChildItem -Path "public/images" -Recurse -Include *.jpg,*.jpeg,*.png,*.webp,*.avif
$smallImages = $images | Where-Object { $_.Length -lt 100000 } | Sort-Object Length

$report = "Low Resolution / Small Image Report (Images < 100KB)`n"
$report += "=================================================`n"

foreach ($img in $smallImages) {
    $relPath = $img.FullName.Replace("C:\website_project\kutchtravel\", "")
    $sizeKB = [math]::round($img.Length / 1KB, 2)
    $report += "$relPath - $sizeKB KB`n"
}

$report | Out-File "low_res_images_report.txt" -Encoding utf8
Write-Host "Report generated at low_res_images_report.txt"
