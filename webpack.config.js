'use strict';

// includes
let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let AssetsPlugin = require('assets-webpack-plugin');
let defaultPath = path.resolve(__dirname, 'application');
// config
module.exports = {
  entry: {
    server: defaultPath + '/server',
    assets: defaultPath + '/assets'
  },

  resolve: {
    moduleDirectories: ['web_modules', 'node_modules'],
    root: defaultPath,
    // alias: {
    //   _global: defaultPath + '/global',
    //   _vendors: defaultPath + '/vendors',
    //   _fonts: 'fonts',
    //   _images: 'images',
    //   _sass: 'sass',
    //   _js: 'js'
    // },
  output: {
    path: defaultPath + '/static',
    filename: '[name]/[name].js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};