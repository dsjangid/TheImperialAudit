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
const brokenAnchors = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Find all id="..."
  const ids = new Set();
  for (const m of content.matchAll(/id=["']([^"']+)["']/gi)) {
    ids.add(m[1]);
  }

  // Find all href="#..." on this same page
  for (const m of content.matchAll(/<a\s+[^>]*href=["']#([^"']+)["']/gi)) {
    const anchor = m[1];
    if (anchor && !ids.has(anchor)) {
      brokenAnchors.push({
        file: path.relative(OUT_DIR, file),
        anchor
      });
    }
  }

  // Also find href="/some/path#anchor"
  for (const m of content.matchAll(/<a\s+[^>]*href=["']([^"'#]+)#([^"']+)["']/gi)) {
    const targetPath = m[1];
    const targetAnchor = m[2];
    // Check if target file exists and has targetAnchor
    // If it's the current page or relative
  }
}

console.log(`Found ${brokenAnchors.length} broken on-page anchors.`);
if (brokenAnchors.length > 0) {
  brokenAnchors.forEach(b => console.log(`  ${b.file}: #${b.anchor}`));
}
