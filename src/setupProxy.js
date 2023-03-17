// To allow the frontend to make requests to the backend Express server locally during development 

    const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function (app) {
        app.use(
            '/api',
            createProxyMiddleware({
                target: 'http://localhost:8080',
                changeOrigin: true,
            })
        );
    }