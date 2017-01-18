'use strict';

// includes
let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let AssetsPlugin = require('assets-webpack-plugin');
let defaultPath = path.resolve(__dirname);
// config
module.exports = {
  enter: {
    main: path.resolve(__dirname, 'index.js'),
    server: path.resolve(__dirname, 'server')
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/static/',
    filename: hash('[name]/[name]', '[chunkhash]', 'js')
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
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-runtime'],
        ignore: ['/commons/', '*.min.js', 'bootstrap-datetimepicker.js']
      }
    }, {
      test: /\.(eot|otf|woff|woff2|ttf)$/,
      loader: 'url?name=fonts/[hash].[ext]&limit=10000',
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url?name=images/[hash].[ext]&limit=10000',
    }, {
      test: /\.sass|.scss|.css$/,
      loader: ExtractTextPlugin.extract(css()),
    }]
  },

  debug: process.env.NODE_ENV === 'develop',

  watch: process.env.NODE_ENV === 'develop',

  devtool: process.env.NODE_ENV === 'develop' ? null : 'source-map',

  // eslint: {
  //  configFile: '.eslintrc'
  // },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin(hash('[name]/[name]', '[contenthash]', 'css'), {allChunks: true}),
    new AssetsPlugin({
      filename: 'static.json',
      path: defaultPath,
      update: true,
      prettyPrint: true,
    }),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|ru)$/),
    new webpack.ProvidePlugin({
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      'forEach': 'babel-polyfill'
    })
  ]
};

/**
 * Add Autoprefixer for Build
 *
 * @return     {string}  Params for loader
 */
function css() {
  return (process.env.NODE_ENV === 'build')
   ? 'css!autoprefixer-loader?browsers=last 5 version!sass'
   : 'css!sass?sourceMap&indentedSyntax';
}

/**
 * Make Hash for Build
 *
 * @param      {string}  dir        The Path
 * @param      {string}  num        The Hash
 * @param      {string}  extension  The File Extension
 * @return     {string}  summ
 */
function hash(dir, num, extension) {
  return (process.env.NODE_ENV !== 'build')
   ? dir + '.' + extension
   : dir + '.' + num + '.' + extension;
}