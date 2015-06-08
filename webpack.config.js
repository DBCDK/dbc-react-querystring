'use strict';

/**
 * Config file for webpack
 */

var webpack = require('webpack');

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
      }
    ]
  },
  plugins: [
    definePlugin
  ]
};
