const fs = require('fs');
const path = require('path');

const TARGET_DIRS = ['app', 'components', 'data', 'lib']; // Add other dirs if needed
const EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx', '.json', '.css', '.md'];

let stats = {
  filesChanged: 0,
  replacements: 0
};

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

function updateFile(filePath) {
  const ext = path.extname(filePath);
  if (!EXTENSIONS.includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace .jpg and .jpeg with .webp
  // Case insensitive
  // We use a regex that looks for .jpg followed by specific boundary characters or end of line
  // Common boundaries: ", ', ), ?, #, whitespace
  // But safest is simply replacing the extension text if it looks like a file path
  
  // Strategy: global replace of .jpg with .webp
  // Risk: Low for this project
  const regex = /\.jpg|\.jpeg/gi;
  
  if (regex.test(content)) {
    content = content.replace(regex, '.webp');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
      stats.filesChanged++;
      // Count replacements (rough estimate)
      const count = (originalContent.match(regex) || []).length;
      stats.replacements += count;
    }
  }
}

function main() {
  console.log('🚀 Starting Code Reference Update (.jpg -> .webp)...');

  TARGET_DIRS.forEach(dir => {
    const fullDir = path.join(process.cwd(), dir);
    console.log(`Scanning: ${dir}`);
    walkDir(fullDir, (filePath) => {
      updateFile(filePath);
    });
  });

  console.log('\n📊 Update Complete!');
  console.log(`   📝 Files Modified: ${stats.filesChanged}`);
  console.log(`   🔄 References Replaced: ${stats.replacements}`);
}

main();
