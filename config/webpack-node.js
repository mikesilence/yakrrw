'use strict';

import webpack from 'webpack';

export default function(appPath, buildPath, localPath) {
  return {
    entry: {
      server: appPath + '/server'
    },

    target: 'node',

    output: {
      path: buildPath + '/server',
      publicPath: '',
      filename: '[name].js'
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
      }]
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin()
    ],

    node: {
      fs: 'empty'
    }
  };
}
