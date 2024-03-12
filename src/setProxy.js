const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://43.203.21.185:8080",
      changeOrigin: true,
    })
  );
};