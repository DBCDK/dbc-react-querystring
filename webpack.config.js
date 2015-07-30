'use strict';

/**
 * Config file for webpack
 */

var webpack = require('webpack');
var path = require('path');

/**
 * Defines the context webpack is running in
 *
 * @type {webpack.DefinePlugin}
 */
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')), // eslint-disable-line no-process-env
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')) // eslint-disable-line no-process-env
});

/**
 * Setup webpack to transpile ES6 and jsx + handle scss files
 *
 * @type {{entry: {app: string}, output: {path: string, filename: string}, module: {loaders: *[]}, plugins: *[]}}
 */
module.exports = {
  entry: {
    app: path.join(__dirname, '/examples/app.js')
  },
  output: {
    path: path.join(__dirname, '/examples/public'),
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
