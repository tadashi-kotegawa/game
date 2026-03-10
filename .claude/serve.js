const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const port = 3000;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  const fp = path.join(root, url === '/' ? '/index.html' : url);
  const candidates = [fp, fp + '.html'];
  let served = false;
  for (const candidate of candidates) {
    try {
      const data = fs.readFileSync(candidate);
      const ct = mime[path.extname(candidate)] || 'text/plain';
      res.writeHead(200, { 'Content-Type': ct });
      res.end(data);
      served = true;
      break;
    } catch {}
  }
  if (!served) { res.writeHead(404); res.end('Not found'); }
}).listen(port, () => console.log(`Server running at http://localhost:${port}`));
