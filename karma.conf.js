module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    exclude: [],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'PhantomJS'],
    singleRun: true,
    webpack: require('./webpack.test.config'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};
