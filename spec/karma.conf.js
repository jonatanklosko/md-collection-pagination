const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

module.exports = config => {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-webpack'
    ],
    files: ['md-collection-pagination.spec.js'],
    preprocessors: {
      'md-collection-pagination.spec.js': ['webpack']
    },
    webpack: {
      module: webpackConfig.module /* Copy the loaders configuration. */
    },
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
