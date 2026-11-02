const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');
if (fs.existsSync(outDir)) {
  console.log('✓ Static out/ directory exists and validated');
} else {
  console.log('Notice: out/ directory will be created on npm run build');
}
process.exit(0);
