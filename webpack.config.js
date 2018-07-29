const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode : "development",
  entry : "./src/App.jsx",
  output : {
    path : path.resolve( __dirname, 'public'),
    filename : 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx$/,
        exclude : /\.\/node_modules/,
        loader : 'babel-loader',
        query : {
          presets : ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
}
