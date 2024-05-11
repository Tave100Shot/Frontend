const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://43.203.64.45:8080",
      changeOrigin: true,
    })
  );
};