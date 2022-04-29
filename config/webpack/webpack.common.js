const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { IgnorePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('../paths');
const { appOutput, appSrc, appHtml, appIndex } = paths;

module.exports = {
  stats: {
    errorDetails: true,
  },
  entry: appIndex,
  output: {
    filename: 'scar.[name].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: appOutput,
  },
  resolve: {
    alias: {
      '@': appSrc,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /backbone\.js$/,
        use: [
          {
            options: {
              loader: 'imports-loader?define=>false',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new IgnorePlugin({
      resourceRegExp: /^jquery$/,
    }),
    new HtmlWebpackPlugin({
      template: appHtml,
    }),
  ],
};
