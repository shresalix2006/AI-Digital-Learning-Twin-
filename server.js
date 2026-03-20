const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 4000;
const GROQ_API_KEY = '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';

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    const htmlPath = path.join(__dirname, 'twin_ai.html');
    fs.readFile(htmlPath, 'utf8', (err, data) => {
      if (err) { res.writeHead(500); res.end('Cannot find twin_ai.html in this folder.'); return; }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/ask') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      let parsed;
      try { parsed = JSON.parse(body); }
      catch { res.writeHead(400); res.end(JSON.stringify({ error: { message: 'Invalid JSON' } })); return; }

      const { messages } = parsed;
      if (!messages) { res.writeHead(400); res.end(JSON.stringify({ error: { message: 'Missing messages' } })); return; }

      const payload = JSON.stringify({ model: 'llama-3.3-70b-versatile', max_tokens: 1000, messages });
      const options = {
        hostname: 'api.groq.com',
        path: '/openai/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Length': Buffer.byteLength(payload)
        }
      };

      const proxyReq = https.request(options, proxyRes => {
        let data = '';
        proxyRes.on('data', chunk => { data += chunk; });
        proxyRes.on('end', () => {
          res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
          res.end(data);
        });
      });

      proxyReq.on('error', err => {
        res.writeHead(502);
        res.end(JSON.stringify({ error: { message: err.message } }));
      });

      proxyReq.write(payload);
      proxyReq.end();
    });
    return;
  }

  res.writeHead(404); res.end('Not found');
});

server.listen(PORT, () => {
  console.log('\n✅ TWIN::AI server is running! (Groq)');
  console.log('\n   👉 Open your browser and go to:');
  console.log('      http://localhost:4000\n');
  console.log('   Keep this terminal open while using the app.\n');
});
