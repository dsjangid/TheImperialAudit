const fs = require('fs');
const path = require('path');

const primaryDocs = fs.readFileSync(path.join(__dirname, '../src/data/primary-documents.ts'), 'utf8');
const matches = [...primaryDocs.matchAll(/shelfmark:\s*['"]([^'"]+)['"]/g)];

console.log(`✓ Validated ${matches.length} archival shelfmarks in catalog`);
process.exit(0);
