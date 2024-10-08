const http = require('node:http');
const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * Configure proxy middleware
 */
const proxyMiddleware = createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
});


const server = http.createServer(proxyMiddleware);

console.log("listening on port 8000")
server.listen(8000);
