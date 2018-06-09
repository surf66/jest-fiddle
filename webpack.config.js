const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

var stockSearchConfig = {
  entry: [
    'babel-polyfill',
    './src/js/index.js'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'web')
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "jquery": "jQuery"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
          presets: ['es2017', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/app.html', to: 'app.html' }
    ])
  ]
};

module.exports = [stockSearchConfig];
