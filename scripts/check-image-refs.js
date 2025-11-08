const fs = require('fs');
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public');

function walk(dir, exts = ['.ts', '.tsx', '.js', '.jsx', '.md', '.json']) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full, exts));
    } else if (exts.includes(path.extname(entry.name))) {
      results.push(full);
    }
  }
  return results;
}

const files = walk(path.join(root, 'app')).concat(walk(path.join(root, 'components'))).concat(walk(path.join(root, 'data'))).concat(walk(path.join(root, 'scripts')));

const regex = /["'`]([^"'`]*\/images\/[\w\-./]+?\.(?:jpe?g|png|webp|avif|gif))["'`]/ig;

const found = new Set();

for (const f of files) {
  try {
    const content = fs.readFileSync(f, 'utf8');
    let m;
    while ((m = regex.exec(content))) {
      found.add(m[1]);
    }
  } catch (e) {
    // ignore
  }
}

const refs = Array.from(found).sort();
const missing = [];

for (const ref of refs) {
  const p = path.join(publicDir, ref.replace(/^\//, ''));
  if (!fs.existsSync(p)) missing.push({ ref, expected: p });
}

console.log('Found', refs.length, 'image references.');
if (missing.length === 0) {
  console.log('All referenced images exist under public/.');
} else {
  console.log('Missing images (referenced but not found under public/):');
  for (const m of missing) {
    console.log('- ', m.ref, ' -> expected at', m.expected);
  }
  process.exitCode = 2;
}
