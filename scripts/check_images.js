const fs = require('fs');
const path = require('path');

const SRC_DIR = '/Users/meydivyansh/Projects/The-Imperial-Audit/src';
const PUBLIC_DIR = '/Users/meydivyansh/Projects/The-Imperial-Audit/public';
const BASE_PATH = '/TheImperialAudit';

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else if (/\.(tsx|ts|js|jsx|css|json)$/.test(file)) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getFilesRecursively(SRC_DIR);
const imageRefs = new Set();

const imgRegex = /["'`]((\/TheImperialAudit)?\/[^"'`]+\.(png|jpe?g|svg|webp|ico))["'`]/gi;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    imageRefs.add({ file: path.relative(SRC_DIR, file), ref: match[1] });
  }
});

console.log(`Found ${imageRefs.size} unique image references across src/...`);

const missing = [];
for (const { file, ref } of imageRefs) {
  let clean = ref;
  if (clean.startsWith(BASE_PATH)) {
    clean = clean.slice(BASE_PATH.length);
  }
  const diskPath = path.join(PUBLIC_DIR, clean);
  if (!fs.existsSync(diskPath)) {
    missing.push({ file, ref, diskPath });
  }
}

if (missing.length === 0) {
  console.log('All image references in source code exist in public/ folder!');
} else {
  console.log(`Found ${missing.length} MISSING images:`);
  missing.forEach(m => console.log(`  in ${m.file}: ${m.ref} -> missing ${m.diskPath}`));
}
