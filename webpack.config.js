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

  output: {
    path: defaultPath + '/static',
    publicPath: '/static/',
    filename: '[name]/[name].js'
  },

  resolve: {
    moduleDirectories: ['node_modules'],
    root: defaultPath,
    alias: {
      _fonts: 'fonts',
      _images: 'images',
      _styl: 'styl',
      _js: 'js'
    }
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-runtime'],
        ignore: []
      }
    }, { 
      test:  /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(eot|otf|woff|woff2|ttf)$/,
      loader: 'url?name=fonts/[hash].[ext]&limit=10000',
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url?name=images/[hash].[ext]&limit=10000',
    }, {
      test: /\.styl|.css$/,
      loader: 'css!autoprefixer-loader?browsers=last 5 version!styl',
    }]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};