const { merge } = require('webpack-merge');
const openBrowser = require('react-dev-utils/openBrowser');

const dev = require('./webpack.dev.js');
const { appOutput } = require('../paths');

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'localhost';

module.exports = merge(dev, {
  devServer: {
    host: HOST,
    port: PORT,
    hot: true,
    historyApiFallback: true,
    client: {
      logging: 'verbose',
    },
    static: appOutput,
    setupMiddlewares: (middlewares) => {
      openBrowser && openBrowser(`http://${HOST}:${PORT}`);
      return middlewares;
    },
    onListening: (devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      const port = devServer.server.address().port;
      console.log('Listening on port:', port);
    },
    proxy: {
      '/resources': {
        target: 'http://localhost:9001',
        cookiePathRewrite: '/',
      },
    },
  },
});
