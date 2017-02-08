const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'md-collection-pagination.js',
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
  }
};
