// proxy.js
const httpProxy = require('http-proxy');
const http = require('http');

const proxy = httpProxy.createProxyServer({ target: 'http://localhost:3000' });

const server = http.createServer((req, res) => {
  console.log("Received url (timestamp = " + new Date() + ") = ," +  req.url);
  if (req.url.includes('//')) {
    // Cleaning the url for multiple/extra slashes with single slash
    const cleanedUrl = req.url.replace(/\/+/g, '/');
    // Redirecting the browser with the cleaned url. 308 - permenant redirect
    res.writeHead(308, { Location: cleanedUrl });
    // Stopping further proxy forwarding
    res.end();
    return;
  }
  proxy.web(req, res);
});

server.listen(8000, () => {
  console.log('Secure proxy listening on http://localhost:8000');
});
