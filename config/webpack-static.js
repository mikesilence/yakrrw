'use strict';

import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import AssetsPlugin from 'assets-webpack-plugin';

export default function(appPath, buildPath, localPath) {
  return {
    entry: {
      application: appPath + '/assets'
    },

    output: {
      path: buildPath + '/static',
      publicPath: localPath,
      filename: '[name].js'
    },

    resolve: {
      modules: [
        appPath,
        'node_modules'
      ],
      alias: {
        _fonts: 'fonts',
        _images: 'images',
        _sass: 'sass',
        _js: 'js'
      }
    },

    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          // plugins: ['transfrom-runtime'],
          ignore: []
        }
      }, {
        test: /\.(eot|otf|woff|woff2|ttf)$/,
        loader: 'url-loader?name=fonts/[hash].[ext]&limit=10000',
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?name=images/[hash].[ext]&limit=10000',
      }, {
        test: /\.styl|.css$/,
        loader: 'css!autoprefixer-loader?browsers=last 5 version!sass',
      }]
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin()
    ]
  };
}
