const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/locales/en/common.json'), 'utf8'));
const bn = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/locales/bn/common.json'), 'utf8'));
const hi = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/locales/hi/common.json'), 'utf8'));

const enKeys = Object.keys(en).sort();
const bnKeys = Object.keys(bn).sort();
const hiKeys = Object.keys(hi).sort();

if (JSON.stringify(enKeys) === JSON.stringify(bnKeys) && JSON.stringify(enKeys) === JSON.stringify(hiKeys)) {
  console.log('✓ Locale parity check passed for en, bn, hi (' + enKeys.length + ' keys matched)');
  process.exit(0);
} else {
  console.error('✗ Locale key mismatch detected');
  process.exit(1);
}
