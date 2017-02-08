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
      publicPath: '/server/',
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
      }],

      // Remove Critical dependencies warning
      // require
      // unknownContextRegExp: /$^/,
      // unknownContextCritical: false,

      // // require(expr)
      // exprContextRegExp: /$^/,
      // exprContextCritical: false,

      // // require("prefix" + expr + "surfix")
      // wrappedContextRegExp: /$^/,
      // wrappedContextCritical: false
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.ProvidePlugin({
        window: {},
        document: {}
      })
    ],

    node: {
      fs: 'empty'
    }
  };
}
