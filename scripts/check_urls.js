const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

function getFilesRecursively(dir, filterExt) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath, filterExt));
    } else if (file.endsWith(filterExt)) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getFilesRecursively(OUT_DIR, '.html');
const suspiciousUrls = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  for (const m of content.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    const url = m[1];
    if (url.startsWith('http://') || url.startsWith('https://')) {
      // Check for common malformations
      if (url.includes(' ') || url.includes('"') || url.includes('http://http') || url.includes('https://https') || url.endsWith('undefined')) {
        suspiciousUrls.push({ file: path.relative(OUT_DIR, file), url });
      }
    }
  }
}

console.log(`Found ${suspiciousUrls.length} suspicious external URLs.`);
if (suspiciousUrls.length > 0) {
  console.log(suspiciousUrls);
}
