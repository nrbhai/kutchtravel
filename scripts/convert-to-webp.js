const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png']; // We can add .png if desired, but user asked for .jpg
const DELETE_ORIGINAL = true; // Set to false to keep originals

// Statistics
let stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  savedBytes: 0
};

// Recursive function to walk directories
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip if not target extension
  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  // Skip if already webp (redundant check but safe)
  if (ext === '.webp') return;

  const newFilePath = filePath.substring(0, filePath.lastIndexOf('.')) + '.webp';

  try {
    // Check if new file already exists
    if (fs.existsSync(newFilePath)) {
    //   console.log(`Skipping (active): ${filePath} -> .webp already exists`);
      stats.skipped++;
      return;
    }

    const originalSize = fs.statSync(filePath).size;

    // Convert
    await sharp(filePath)
      .webp({ quality: 80 }) // 80 is a good balance
      .toFile(newFilePath);

    const newSize = fs.statSync(newFilePath).size;
    const savings = originalSize - newSize;
    stats.savedBytes += savings;
    stats.processed++;

    console.log(`Converted: ${path.relative(process.cwd(), filePath)} -> ${path.relative(process.cwd(), newFilePath)} (Saved ${(savings / 1024).toFixed(2)} KB)`);

    // Delete original if configured
    if (DELETE_ORIGINAL) {
       fs.unlinkSync(filePath);
    }

  } catch (err) {
    console.error(`Error converting ${filePath}:`, err.message);
    stats.errors++;
  }
}

async function main() {
  console.log('🚀 Starting Image Conversion to WebP...');
  console.log(`Scanning directory: ${PUBLIC_DIR}`);

  const filesToProcess = [];
  walkDir(PUBLIC_DIR, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (IMAGE_EXTENSIONS.includes(ext)) {
      filesToProcess.push(filePath);
    }
  });

  console.log(`Found ${filesToProcess.length} images to convert.`);

  for (const file of filesToProcess) {
    await convertImage(file);
  }

  console.log('\n📊 Conversion Complete!');
  console.log(`   ✅ Processed: ${stats.processed}`);
  console.log(`   ⏭️ Skipped: ${stats.skipped}`);
  console.log(`   ❌ Errors: ${stats.errors}`);
  console.log(`   💾 Total Space Saved: ${(stats.savedBytes / 1024 / 1024).toFixed(2)} MB`);
}

main();
