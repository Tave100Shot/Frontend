const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '54.180.163.188:8080',
      changeOrigin: true,
    })
  );
};