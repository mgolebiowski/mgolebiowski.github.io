const path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './dev/index.js',
  module: {
  loaders: [
		{ test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
		{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
		{ test: /\.css$/, loader: "style-loader!css-loader"},
	  ],
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};