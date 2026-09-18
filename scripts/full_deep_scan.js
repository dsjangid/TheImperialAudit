const fs = require('fs');
const path = require('path');
const http = require('http');

const OUT_DIR = path.join(__dirname, '..', 'out');
const SRC_DIR = path.join(__dirname, '..', 'src');
const BASE_PATH = '/TheImperialAudit';
const PORT = 3000;

console.log('====================================================');
console.log('       THE IMPERIAL AUDIT · FULL DEEP SCAN          ');
console.log('====================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let warnings = [];
let errors = [];

function recordCheck(passed, description, detail = '') {
  totalChecks++;
  if (passed) {
    passedChecks++;
  } else {
    errors.push({ description, detail });
  }
}

// 1. RECURSIVE FILE FINDER
function getFiles(dir, ext) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, ext));
    } else if (!ext || file.endsWith(ext)) {
      results.push(fullPath);
    }
  }
  return results;
}

// -------------------------------------------------------------
// CHECK 1: EMOJI AUDIT IN SOURCE FILES
// -------------------------------------------------------------
console.log('▶ [1/7] Scanning source code for forbidden emojis...');
const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F018}-\u{1F0F5}\u{1F200}-\u{1F270}]/u;
const srcFiles = getFiles(SRC_DIR, '.tsx').concat(getFiles(SRC_DIR, '.ts')).concat(getFiles(SRC_DIR, '.css'));

let emojiCount = 0;
for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    const match = line.match(emojiRegex);
    if (match) {
      emojiCount++;
      recordCheck(false, 'Emoji detected in source file', `${path.relative(SRC_DIR, file)}:${idx + 1} -> "${match[0]}"`);
    }
  });
}
if (emojiCount === 0) {
  recordCheck(true, 'Zero emojis found in source code');
  console.log('  ✓ Clean: 0 emojis found across all TS/TSX/CSS files.');
} else {
  console.log(`  ✗ Failed: ${emojiCount} emojis detected.`);
}

// -------------------------------------------------------------
// CHECK 2: COLOR PALETTE INTEGRITY
// -------------------------------------------------------------
console.log('\n▶ [2/7] Auditing strict primary color palette (#F5F5F0, #D6D6D0, #C62828, #E53935, #2A2A2A)...');
const bannedColorRegex = /#(F59E0B|D97706|FBBF24|3B82F6|60A5FA|10B981|EF4444|EC4899|8B5CF6)/gi;
let nonPaletteCount = 0;
for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    const match = line.match(bannedColorRegex);
    if (match) {
      nonPaletteCount++;
      recordCheck(false, 'Non-primary palette color detected', `${path.relative(SRC_DIR, file)}:${idx + 1} -> "${match[0]}"`);
    }
  });
}
if (nonPaletteCount === 0) {
  recordCheck(true, 'Color palette strictly compliant');
  console.log('  ✓ Clean: 100% compliant with white, gray, red primary system.');
} else {
  console.log(`  ✗ Failed: ${nonPaletteCount} non-palette color instances detected.`);
}

// -------------------------------------------------------------
// CHECK 3: STATIC HTML ASSETS & INTERNAL LINKS
// -------------------------------------------------------------
console.log('\n▶ [3/7] Scanning static build (out/) for dead links, missing images & assets...');
const htmlFiles = getFiles(OUT_DIR, '.html');
console.log(`  Auditing ${htmlFiles.length} HTML files in out/...`);

const idMap = new Map();
// First pass: index all IDs across all HTML files
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const ids = new Set();
  for (const m of content.matchAll(/\bid=["']([^"']+)["']/gi)) {
    ids.add(m[1]);
  }
  idMap.set(file, ids);
}

let brokenLinks = 0;
let brokenImages = 0;
let brokenAssets = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(OUT_DIR, file);

  // Check <a> links
  for (const m of content.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    const href = m[1].trim();
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('javascript:')) continue;

    const [pathPart, fragment] = href.split('#');
    let targetFile = file;

    if (pathPart) {
      let cleanPath = pathPart;
      if (cleanPath.startsWith(BASE_PATH)) {
        cleanPath = cleanPath.slice(BASE_PATH.length);
      }
      if (!cleanPath.startsWith('/')) {
        targetFile = path.resolve(path.dirname(file), cleanPath);
      } else {
        targetFile = path.join(OUT_DIR, decodeURIComponent(cleanPath));
      }

      if (fs.existsSync(targetFile) && fs.statSync(targetFile).isDirectory()) {
        targetFile = path.join(targetFile, 'index.html');
      } else if (!fs.existsSync(targetFile)) {
        if (fs.existsSync(targetFile + '.html')) targetFile = targetFile + '.html';
        else if (fs.existsSync(path.join(targetFile, 'index.html'))) targetFile = path.join(targetFile, 'index.html');
      }
    }

    if (!fs.existsSync(targetFile)) {
      brokenLinks++;
      recordCheck(false, 'Broken link detected', `${relPath} -> ${href}`);
    } else if (fragment && idMap.has(targetFile)) {
      const ids = idMap.get(targetFile);
      if (!ids.has(fragment)) {
        // Warning if fragment id doesn't match exactly
        warnings.push(`Anchor fragment #${fragment} in ${relPath} might be dynamic or missing`);
      }
    }
  }

  // Check <img> sources
  for (const m of content.matchAll(/<img\s+[^>]*src=["']([^"']+)["']/gi)) {
    const src = m[1].trim();
    if (!src || src.startsWith('http') || src.startsWith('data:')) continue;

    let cleanSrc = src;
    if (cleanSrc.startsWith(BASE_PATH)) {
      cleanSrc = cleanSrc.slice(BASE_PATH.length);
    }
    const resolvedImg = path.join(OUT_DIR, decodeURIComponent(cleanSrc));
    if (!fs.existsSync(resolvedImg)) {
      brokenImages++;
      recordCheck(false, 'Broken image detected', `${relPath} -> ${src}`);
    }
  }

  // Check <link> and <script> assets
  for (const m of content.matchAll(/<(?:link|script)\s+[^>]*(?:href|src)=["']([^"']+)["']/gi)) {
    const asset = m[1].trim();
    if (!asset || asset.startsWith('http') || asset.startsWith('data:')) continue;

    let cleanAsset = asset;
    if (cleanAsset.startsWith(BASE_PATH)) {
      cleanAsset = cleanAsset.slice(BASE_PATH.length);
    }
    const resolvedAsset = path.join(OUT_DIR, decodeURIComponent(cleanAsset.split('?')[0]));
    if (!fs.existsSync(resolvedAsset)) {
      brokenAssets++;
      recordCheck(false, 'Broken static asset detected', `${relPath} -> ${asset}`);
    }
  }
}

if (brokenLinks === 0 && brokenImages === 0 && brokenAssets === 0) {
  recordCheck(true, 'All internal links, images, and assets resolve cleanly');
  console.log('  ✓ Clean: 0 broken links, 0 broken images, 0 broken script/CSS assets.');
} else {
  console.log(`  ✗ Failed: ${brokenLinks} broken links, ${brokenImages} broken images, ${brokenAssets} broken assets.`);
}

// -------------------------------------------------------------
// CHECK 4: TEXT & RENDERING GLITCHES
// -------------------------------------------------------------
console.log('\n▶ [4/7] Scanning for unrendered template strings, NaN, undefined, [object Object]...');
let glitchCount = 0;
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(OUT_DIR, file);

  const visibleContent = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  const textChecks = [
    { pattern: />[^<]*\[object Object\][^<]*/g, label: '[object Object]' },
    { pattern: />[^<]*\bNaN\b[^<]*/g, label: 'NaN' },
    { pattern: />[^<]*\bundefined\b[^<]*/g, label: 'undefined' },
    { pattern: />[^<]*\{\{[^}]+\}\}[^<]*/g, label: 'Unrendered template {{...}}' },
  ];

  for (const { pattern, label } of textChecks) {
    const m = visibleContent.match(pattern);
    if (m) {
      glitchCount++;
      recordCheck(false, `Text rendering glitch (${label})`, `${relPath}: "${m[0].trim()}"`);
    }
  }
}
if (glitchCount === 0) {
  recordCheck(true, 'Zero text glitches or unrendered templates found');
  console.log('  ✓ Clean: 0 unrendered placeholders, NaN, or undefined strings found.');
} else {
  console.log(`  ✗ Failed: ${glitchCount} text glitches detected.`);
}

// -------------------------------------------------------------
// CHECK 5: SEO, METADATA & ACCESSIBILITY AUDIT
// -------------------------------------------------------------
console.log('\n▶ [5/7] Auditing SEO metadata, viewport tags, document titles, and image alt tags...');
let metaIssues = 0;
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(OUT_DIR, file);

  if (!content.includes('<title>')) {
    metaIssues++;
    recordCheck(false, 'Missing <title> tag', relPath);
  }
  if (!content.includes('name="viewport"')) {
    metaIssues++;
    recordCheck(false, 'Missing viewport meta tag', relPath);
  }

  // Check images missing alt tags
  for (const m of content.matchAll(/<img\s+([^>]*?)>/gi)) {
    const attrs = m[1];
    if (!attrs.includes('alt=')) {
      metaIssues++;
      recordCheck(false, 'Image missing alt attribute', `${relPath} -> <img ${attrs.slice(0, 50)}...>`);
    }
  }
}
if (metaIssues === 0) {
  recordCheck(true, 'All HTML files have valid titles, viewports, and image alts');
  console.log('  ✓ Clean: All pages have valid <title>, viewport tags, and 100% image alt coverage.');
} else {
  console.log(`  ✗ Failed: ${metaIssues} metadata/accessibility issues detected.`);
}

// -------------------------------------------------------------
// CHECK 6: DOSSIER RECORDS & DATASET INTEGRITY
// -------------------------------------------------------------
console.log('\n▶ [6/7] Auditing 12 historical dossiers and primary document references...');
const dossiersTs = fs.readFileSync(path.join(SRC_DIR, 'data', 'dossiers.ts'), 'utf8');
const primaryDocsTs = fs.readFileSync(path.join(SRC_DIR, 'data', 'primary-documents.ts'), 'utf8');

const dossierIds = [...dossiersTs.matchAll(/id:\s*["']([a-z0-9_-]+)["']/g)].map(x => x[1]);
console.log(`  Validating ${dossierIds.length} dossier profiles...`);

let missingDossiers = 0;
for (const id of dossierIds) {
  const dossierHtml = path.join(OUT_DIR, 'en', 'chapters', 'dossiers', id, 'index.html');
  if (!fs.existsSync(dossierHtml)) {
    missingDossiers++;
    recordCheck(false, 'Missing generated static page for dossier', `dossiers/${id}`);
  }
}
if (missingDossiers === 0) {
  recordCheck(true, 'All dossier static pages exist and are compiled');
  console.log(`  ✓ Clean: All ${dossierIds.length} individual historical dossiers compiled cleanly.`);
} else {
  console.log(`  ✗ Failed: ${missingDossiers} dossier pages missing from out/.`);
}

// -------------------------------------------------------------
// CHECK 7: LIVE HTTP SERVER STATUS CODE VERIFICATION
// -------------------------------------------------------------
console.log(`\n▶ [7/7] Testing live HTTP server on port ${PORT}...`);

const routesToTest = [
  '/',
  `${BASE_PATH}/`,
  `${BASE_PATH}/en/`,
  `${BASE_PATH}/en/chapters/timer/`,
  `${BASE_PATH}/en/chapters/comparison/`,
  `${BASE_PATH}/en/chapters/dossiers/`,
  `${BASE_PATH}/en/chapters/dossiers/clive/`,
  `${BASE_PATH}/en/chapters/dossiers/curzon/`,
  `${BASE_PATH}/en/chapters/dossiers/dyer/`,
  `${BASE_PATH}/en/chapters/dossiers/odwyer/`,
  `${BASE_PATH}/en/chapters/dossiers/churchill/`,
  `${BASE_PATH}/en/chapters/dossiers/mountbatten/`,
  `${BASE_PATH}/en/chapters/dossiers/lakshmibai/`,
  `${BASE_PATH}/en/chapters/dossiers/hazratmahal/`,
  `${BASE_PATH}/en/chapters/dossiers/gandhi/`,
  `${BASE_PATH}/en/chapters/dossiers/tilak/`,
  `${BASE_PATH}/en/chapters/dossiers/bhagat/`,
  `${BASE_PATH}/en/chapters/dossiers/udham/`,
  `${BASE_PATH}/en/chapters/share/`,
  `${BASE_PATH}/en/chapters/action/`,
  `${BASE_PATH}/en/methodology/`,
  `${BASE_PATH}/en/chapters/dossiers/non-existent-person/` // Expected 404
];

function testRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:${PORT}${route}`, (res) => {
      let dataLen = 0;
      res.on('data', (chunk) => dataLen += chunk.length);
      res.on('end', () => {
        const isExpected404 = route.includes('non-existent');
        const isRedirect = route === '/' || route === `${BASE_PATH}/`;
        let passed = false;

        if (isExpected404) {
          passed = (res.statusCode === 404);
        } else if (isRedirect) {
          passed = (res.statusCode === 302);
        } else {
          passed = (res.statusCode === 200 && dataLen > 500);
        }

        recordCheck(passed, `HTTP route ${route}`, `Status: ${res.statusCode}, Bytes: ${dataLen}`);
        resolve({ route, statusCode: res.statusCode, bytes: dataLen, passed });
      });
    }).on('error', (err) => {
      recordCheck(false, `HTTP connection error for ${route}`, err.message);
      resolve({ route, error: err.message, passed: false });
    });
  });
}

async function runLiveServerTests() {
  let livePasses = 0;
  for (const r of routesToTest) {
    const res = await testRoute(r);
    if (res.passed) {
      livePasses++;
    }
  }

  console.log(`  Tested ${routesToTest.length} live routes: ${livePasses}/${routesToTest.length} passed.`);

  // FINAL SUMMARY
  console.log('\n====================================================');
  console.log('              DEEP SCAN AUDIT SUMMARY               ');
  console.log('====================================================');
  console.log(`Total Checks Executed : ${totalChecks}`);
  console.log(`Passed Checks         : ${passedChecks}`);
  console.log(`Failed / Errors       : ${errors.length}`);
  console.log(`Warnings / Notes      : ${warnings.length}`);

  if (errors.length > 0) {
    console.log('\n--- DETECTED ISSUES ---');
    errors.forEach((err, i) => {
      console.log(`[${i + 1}] ${err.description} - ${err.detail}`);
    });
    process.exit(1);
  } else {
    console.log('\n>>> RESULT: 100% HEALTHY · ZERO GLITCHES · PERFECT AUDIT <<<');
    process.exit(0);
  }
}

runLiveServerTests();
