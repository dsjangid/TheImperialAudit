const http = require('http');

const BASE_PATH = '/TheImperialAudit';

const dossierIds = [
  'clive',
  'curzon',
  'dyer',
  'odwyer',
  'churchill',
  'mountbatten',
  'lakshmibai',
  'hazratmahal',
  'gandhi',
  'tilak',
  'bhagat',
  'udham'
];

const routesToTest = [
  '/',
  '/TheImperialAudit/',
  '/TheImperialAudit/en/',
  '/TheImperialAudit/en/chapters/timer/',
  '/TheImperialAudit/en/chapters/comparison/',
  '/TheImperialAudit/en/chapters/dossiers/',
  ...dossierIds.map(id => `/TheImperialAudit/en/chapters/dossiers/${id}/`),
  '/TheImperialAudit/en/chapters/share/',
  '/TheImperialAudit/en/chapters/action/',
  '/TheImperialAudit/en/methodology/',
  '/TheImperialAudit/chapters/timer/',
  '/TheImperialAudit/chapters/comparison/',
  '/TheImperialAudit/chapters/dossiers/',
  ...dossierIds.map(id => `/TheImperialAudit/chapters/dossiers/${id}/`),
  '/TheImperialAudit/chapters/share/',
  '/TheImperialAudit/chapters/action/',
  '/TheImperialAudit/methodology/',
  // Non-existent route should return 404 cleanly
  '/TheImperialAudit/en/chapters/dossiers/non-existent-person/'
];

function testUrl(url) {
  return new Promise((resolve) => {
    http.get({
      hostname: 'localhost',
      port: 3000,
      path: url,
      headers: { 'User-Agent': 'AuditScanner/1.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let isExpected = false;
        if (url === '/' || url === '/TheImperialAudit/' || url === '/TheImperialAudit') {
          isExpected = res.statusCode === 302 || res.statusCode === 200;
        } else if (url.includes('non-existent')) {
          isExpected = res.statusCode === 404;
        } else {
          isExpected = res.statusCode === 200;
        }
        resolve({
          url,
          statusCode: res.statusCode,
          length: data.length,
          hasError: !isExpected
        });
      });
    }).on('error', (err) => {
      resolve({ url, error: err.message, hasError: true });
    });
  });
}

async function run() {
  console.log(`Testing ${routesToTest.length} routes against production server...\n`);
  const results = [];
  for (const r of routesToTest) {
    const res = await testUrl(r);
    results.push(res);
    console.log(`[${res.statusCode || 'ERR'}] ${res.url} (${res.length || 0} bytes)`);
  }

  const failures = results.filter(r => r.hasError);
  console.log(`\nCompleted testing ${results.length} routes.`);
  if (failures.length > 0) {
    console.log(`FAILURES (${failures.length}):`, failures);
  } else {
    console.log('\n>>> SUCCESS: ALL ROUTES RETURNED PERFECT STATUS CODES (200/302 for valid, 404 for missing)! <<<');
  }
}

run();
