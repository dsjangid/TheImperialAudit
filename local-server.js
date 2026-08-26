const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const OUT_DIR = path.join(__dirname, 'out');
const BASE_PATH = '/TheImperialAudit';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];

  // 1. Root and bare path redirects
  if (reqUrl === '/' || reqUrl === '/en' || reqUrl === '/en/') {
    res.writeHead(302, { Location: `${BASE_PATH}/en/` });
    return res.end();
  }

  if (reqUrl === BASE_PATH || reqUrl === `${BASE_PATH}/`) {
    res.writeHead(302, { Location: `${BASE_PATH}/en/` });
    return res.end();
  }

  // 2. Strip BASE_PATH if present
  let relativePath = reqUrl;
  if (relativePath.startsWith(BASE_PATH)) {
    relativePath = relativePath.slice(BASE_PATH.length);
  }

  if (!relativePath.startsWith('/')) {
    relativePath = '/' + relativePath;
  }

  // 3. Resolve file in OUT_DIR
  let filePath = path.join(OUT_DIR, decodeURIComponent(relativePath));

  // If path is a directory or has no extension, check for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexPath = path.join(filePath, 'index.html');
    if (fs.existsSync(indexPath)) {
      filePath = indexPath;
    }
  } else if (!fs.existsSync(filePath)) {
    // Try appending .html or /index.html
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  // 4. If file exists, serve it
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });
    return fs.createReadStream(filePath).pipe(res);
  }

  // 5. 404 fallback
  const notFoundPath = path.join(OUT_DIR, '404.html');
  if (fs.existsSync(notFoundPath)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return fs.createReadStream(notFoundPath).pipe(res);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

server.listen(PORT, () => {
  console.log(`The Imperial Audit server is running at http://localhost:${PORT}${BASE_PATH}/en/`);
  console.log(`Root redirect active: http://localhost:${PORT}/ -> http://localhost:${PORT}${BASE_PATH}/en/`);
});
