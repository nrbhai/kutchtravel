const fs = require('fs');
const path = require('path');

const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');
const out = path.join(process.cwd(), 'public', 'images', 'gallery', 'manifest.json');

try {
  const files = fs.readdirSync(galleryDir).filter(f => /\.(jpe?g|png|webp|avif|gif)$/i.test(f)).sort();
  const data = files.map(f => `/images/gallery/${f}`);
  fs.writeFileSync(out, JSON.stringify(data, null, 2));
  console.log('Wrote manifest with', data.length, 'images to', out);
} catch (e) {
  console.error('Error generating manifest:', e.message);
  process.exit(1);
}
