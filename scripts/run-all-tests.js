const { execSync } = require('child_process');

const tests = [
  'node scripts/test-record-routes.js',
  'node scripts/test-locale-parity.js',
  'node scripts/test-citation-shelfmarks.js',
  'node scripts/test-drain-math.js',
  'node scripts/test-a11y-contrast.js',
  'node scripts/test-outbound-links.js',
  'node scripts/test-static-output.js'
];

tests.forEach(cmd => {
  console.log(`Running: ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
});

console.log('✓ All 7 automated test suites passed successfully.');
