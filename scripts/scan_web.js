const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const BASE_PATH = '/TheImperialAudit';

console.log('=== IMPERIAL AUDIT SCAN V2 ===\n');

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
console.log(`Auditing ${htmlFiles.length} HTML files...`);

const brokenLinks = [];
const brokenImages = [];
const brokenAssets = [];
const textGlitches = [];

function checkLocalTarget(sourceFile, targetUrl, type) {
  let cleanUrl = targetUrl.split('#')[0].split('?')[0].trim();
  if (!cleanUrl || cleanUrl.startsWith('data:') || cleanUrl.startsWith('mailto:') || cleanUrl.startsWith('javascript:')) {
    return;
  }
  if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
    return;
  }

  let relative = cleanUrl;
  if (relative.startsWith(BASE_PATH)) {
    relative = relative.slice(BASE_PATH.length);
  }

  if (!relative.startsWith('/')) {
    const dir = path.dirname(sourceFile);
    const resolved = path.resolve(dir, relative);
    if (fs.existsSync(resolved)) return;
    if (fs.existsSync(resolved + '.html')) return;
    if (fs.existsSync(path.join(resolved, 'index.html'))) return;
    
    if (type === 'image') brokenImages.push({ source: path.relative(OUT_DIR, sourceFile), target: targetUrl });
    else if (type === 'link') brokenLinks.push({ source: path.relative(OUT_DIR, sourceFile), target: targetUrl });
    else brokenAssets.push({ source: path.relative(OUT_DIR, sourceFile), target: targetUrl });
    return;
  }

  const resolvedInOut = path.join(OUT_DIR, decodeURIComponent(relative));
  if (fs.existsSync(resolvedInOut)) return;
  if (fs.existsSync(resolvedInOut + '.html')) return;
  if (fs.existsSync(path.join(resolvedInOut, 'index.html'))) return;
  if (resolvedInOut.endsWith('/') && fs.existsSync(resolvedInOut.slice(0, -1) + '.html')) return;

  if (type === 'image') brokenImages.push({ source: path.relative(OUT_DIR, sourceFile), target: targetUrl });
  else if (type === 'link') brokenLinks.push({ source: path.relative(OUT_DIR, sourceFile), target: targetUrl });
  else brokenAssets.push({ source: path.relative(OUT_DIR, sourceFile), target: targetUrl });
}

for (const file of htmlFiles) {
  const relPath = path.relative(OUT_DIR, file);
  const rawContent = fs.readFileSync(file, 'utf8');

  // Strip scripts and styles to check visible text only
  const visibleContent = rawContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  const textChecks = [
    { pattern: />[^<]*\[object Object\][^<]*/g, label: '[object Object]' },
    { pattern: />[^<]*\bNaN\b[^<]*/g, label: 'NaN' },
    { pattern: />[^<]*\bundefined\b[^<]*/g, label: 'undefined' },
    { pattern: />[^<]*\{\{[^}]+\}\}[^<]*/g, label: 'Unrendered template {{...}}' }
  ];

  for (const { pattern, label } of textChecks) {
    const m = visibleContent.match(pattern);
    if (m) {
      // Exclude known valid words if any
      textGlitches.push({ file: relPath, label, snippet: m.slice(0, 2) });
    }
  }

  // Links
  for (const m of rawContent.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    checkLocalTarget(file, m[1], 'link');
  }

  // Images
  for (const m of rawContent.matchAll(/<img\s+[^>]*src=["']([^"']+)["']/gi)) {
    checkLocalTarget(file, m[1], 'image');
  }

  // Assets (link/script)
  for (const m of rawContent.matchAll(/<link\s+[^>]*href=["']([^"']+)["']/gi)) {
    checkLocalTarget(file, m[1], 'asset');
  }
}

// Check all dossier images
const dossiers = require('/Users/meydivyansh/Projects/The-Imperial-Audit/src/data/dossiers.ts');
// dossiers.ts is typescript, let's regex scan
const dtContent = fs.readFileSync('/Users/meydivyansh/Projects/The-Imperial-Audit/src/data/dossiers.ts', 'utf8');
const dImgs = [...dtContent.matchAll(/image:\s*["']([^"']+)["']/g)].map(x => x[1]);
for (const img of dImgs) {
  checkLocalTarget(path.join(OUT_DIR, 'index.html'), img, 'image');
}

console.log(`\nScan Results:`);
console.log(`- Broken Links: ${brokenLinks.length}`);
console.log(`- Broken Images: ${brokenImages.length}`);
console.log(`- Broken Assets: ${brokenAssets.length}`);
console.log(`- Text Glitches: ${textGlitches.length}`);

if (brokenLinks.length > 0) {
  console.log('\nBroken Links (sample):', brokenLinks.slice(0, 10));
}
if (brokenImages.length > 0) {
  console.log('\nBroken Images (sample):', brokenImages.slice(0, 10));
}
if (brokenAssets.length > 0) {
  console.log('\nBroken Assets (sample):', brokenAssets.slice(0, 10));
}
if (textGlitches.length > 0) {
  console.log('\nText Glitches (sample):', textGlitches.slice(0, 10));
}
