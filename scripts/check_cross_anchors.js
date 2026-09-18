const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const BASE_PATH = '/TheImperialAudit';

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
const idCache = new Map();

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const ids = new Set();
  for (const m of content.matchAll(/id=["']([^"']+)["']/gi)) {
    ids.add(m[1]);
  }
  idCache.set(file, ids);
}

const brokenCrossAnchors = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');

  // Find all href="...#..."
  for (const m of content.matchAll(/<a\s+[^>]*href=["']([^"'#]+)#([^"']+)["']/gi)) {
    let targetPath = m[1].trim();
    const targetAnchor = m[2].trim();

    if (targetPath.startsWith('http://') || targetPath.startsWith('https://')) continue;

    if (targetPath.startsWith(BASE_PATH)) {
      targetPath = targetPath.slice(BASE_PATH.length);
    }

    let resolvedHtml;
    if (targetPath.startsWith('/')) {
      resolvedHtml = path.join(OUT_DIR, targetPath);
    } else {
      resolvedHtml = path.resolve(path.dirname(file), targetPath);
    }

    let targetFile = null;
    if (fs.existsSync(resolvedHtml) && fs.statSync(resolvedHtml).isFile()) {
      targetFile = resolvedHtml;
    } else if (fs.existsSync(resolvedHtml + '.html')) {
      targetFile = resolvedHtml + '.html';
    } else if (fs.existsSync(path.join(resolvedHtml, 'index.html'))) {
      targetFile = path.join(resolvedHtml, 'index.html');
    }

    if (!targetFile) {
      brokenCrossAnchors.push({
        source: path.relative(OUT_DIR, file),
        link: `${m[1]}#${targetAnchor}`,
        reason: 'Target page not found'
      });
    } else {
      const ids = idCache.get(targetFile);
      if (ids && !ids.has(targetAnchor)) {
        brokenCrossAnchors.push({
          source: path.relative(OUT_DIR, file),
          targetPage: path.relative(OUT_DIR, targetFile),
          anchor: targetAnchor,
          link: `${m[1]}#${targetAnchor}`,
          reason: `ID #${targetAnchor} not found in ${path.relative(OUT_DIR, targetFile)}`
        });
      }
    }
  }
}

console.log(`Found ${brokenCrossAnchors.length} broken cross-page anchor links.`);
if (brokenCrossAnchors.length > 0) {
  brokenCrossAnchors.forEach(b => console.log(JSON.stringify(b, null, 2)));
}
