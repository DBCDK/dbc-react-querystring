/**
 * Config file for webpack
 */

var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');


var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var extractCss = new extractTextPlugin('style.css')

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
        commonsPlugin,
        extractCss
    ]
};