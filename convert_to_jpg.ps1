# Script to convert images to JPG
param(
    [string[]]$ImagePaths
)

Add-Type -AssemblyName System.Drawing

foreach ($path in $ImagePaths) {
    if (Test-Path $path) {
        $fullPath = (Resolve-Path $path).Path
        $dir = Split-Path $fullPath
        $name = [System.IO.Path]::GetFileNameWithoutExtension($fullPath)
        $newPath = Join-Path $dir "$name.jpg"

        Write-Host "Converting $fullPath to $newPath"

        try {
            # Load original image
            $img = [System.Drawing.Bitmap]::FromFile($fullPath)
            
            # Save as JPG
            $img.Save($newPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
            
            # Dispose to release file lock
            $img.Dispose()
            
            Write-Host "Success: Created $newPath"
        }
        catch {
            Write-Host "Error converting $path : $_"
        }
    } else {
        Write-Host "Warning: File not found: $path"
    }
}
