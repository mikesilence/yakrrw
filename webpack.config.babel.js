'use strict';

// includes
import path from 'path';
import devUrls from './config/webpack-urls';
import statics from './config/webpack-static';
import node from './config/webpack-node';

// const version = process.env.NODE_VER;
const environment = process.env.NODE_ENV;
const appPath = path.resolve(__dirname, 'application');
const buildPath = path.resolve(__dirname, 'build');
const localPath = devUrls(environment);
const setting = [statics, node];

// config
export default function() {
  return setting.map(config => Object.assign(
    config(appPath, buildPath, localPath),
    { watch: true })
  );
}
