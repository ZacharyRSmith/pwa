const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: '[name].[hash].js',
    path: './assets/'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './app/index.html' }),
    new CopyWebpackPlugin([
      { from: './app/favicons' }
    ]),
    new OfflinePlugin()
  ]
};
