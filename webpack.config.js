'use strict'

const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './entry.app.ts'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    publicPath: '/assets'
  },
  devServer: {
    contentBase: __dirname + '/src'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }]
      },
      {
        test: /\.ts$/,
        use:[{
          loader: 'awesome-typescript-loader'
        }]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  }
}