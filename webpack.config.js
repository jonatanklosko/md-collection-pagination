const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'md-collection-pagination': './src/index.js',
    'md-collection-pagination.min': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'mdCollectionPagination',
    libraryTarget: 'umd'
  },
  externals: {
    'angular': 'angular',
    'angular-material': 'angular-material'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader?presets[]=es2015',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ include: /\.min\.js$/, minimize: true })
  ]
};
