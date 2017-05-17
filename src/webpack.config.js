var webpack = require('webpack');
var path = require('path');

var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel'
         }
      ]
   }
};

module.exports = config;