/**
 * Config file for webpack
 */

var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Defines the context webpack is running in
 *
 * @type {webpack.DefinePlugin}
 */
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});


/**
 * Extracts css to a separate file
 *
 * @type {ExtractTextPlugin|exports|module.exports}
 */
var extractCss = new extractTextPlugin('style.css')


/**
 * Setup webpack to transpile ES6 and jsx + handle scss files
 *
 * @type {{entry: {app: string}, output: {path: string, filename: string}, module: {loaders: *[]}, plugins: *[]}}
 */
module.exports = {
  entry: {
    app: __dirname + '/examples/app.js'
  },
  output: {
    path: __dirname + '/examples/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      }
    ]
  },
  plugins: [
    definePlugin,
    extractCss
  ]
};