const path = require('path');
var webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './dev/index.js',
  module: {
  loaders: [
		{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
			  fallback: 'style-loader',
			  //resolve-url-loader may be chained before sass-loader if necessary
			  use: [{loader:'css-loader', options: {minimize: true}}, 'sass-loader']
			})
		},
		{ test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader",use: "css-loader"})}
	  ],
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
	  new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new CompressionPlugin({
      test: /(\.js$)|(\.css$)/
    })
  ]
};