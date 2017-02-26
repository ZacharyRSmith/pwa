const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: '[name].[hash].js',
    path: './assets/'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './app/index.html' })
  ]
};
