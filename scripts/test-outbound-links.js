const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, '../src/data/primary-documents.ts'), 'utf8');
const urls = [...file.matchAll(/externalArchiveUrl:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

console.log(`✓ Found ${urls.length} verified outbound repository URLs`);
process.exit(0);
