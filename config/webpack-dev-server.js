'use strict';

import path from 'path';
import _ from 'lodash';
import fs from 'fs';
import Koa from 'koa';
import webpack from 'webpack';
import middleware from 'koa-webpack';
import config from '../webpack.config.babel.js';

const app = new Koa();

_.forEach(config(), (item) => {
  let compiler = webpack(item);
  let instant = middleware({ compiler: compiler });

  compiler.plugin('emit', function(compilation, callback) {
    let assets = compilation.assets;
    let dir = './build/server/';
    let fullPath = (!fs.existsSync(dir)) ? fs.mkdirSync(dir) : dir;
    _.forEach(Object.keys(assets), key => {
      if (key === 'server.js') {
        let file = path.resolve(fullPath, key);
        let data = assets[key].source();
        fs.writeFileSync(file, data);
      }
    });
    callback();
  });

  app.use(instant);
});

app.listen(8050);
