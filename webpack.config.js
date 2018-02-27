const path = require('path');
var webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './dev/index.js',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CompressionPlugin({
      test: /(\.js$)|(\.css$)/
    }),
    new ExtractTextPlugin("styles.css")
  ]
};