/**
 * Config file for webpack
 */

var webpack = require('webpack');
var path = require('path');

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

// Do not rebuild assets on error.
// This is not activated because it can be dificult to catch errors during
// development
var noErrors = new webpack.NoErrorsPlugin();

module.exports = {
    entry: {
        app: __dirname + '/src/examples/app.js'
    },
    output: {
        path: __dirname + '/src/examples/public',
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    },
    plugins: [
        definePlugin
        //commonsPlugin
        //noErrors
    ]
};