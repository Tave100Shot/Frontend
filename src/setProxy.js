const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://43.200.95.44:8080',
      changeOrigin: true,
    })
  );
};