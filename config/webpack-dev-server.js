'use strict';

import Koa from 'koa';
import webpack from 'webpack';
import middleware from 'koa-webpack';
import config from '../webpack.config.babel.js';

const settings = config();
const app = new Koa();
// settings.forEach((item) => {
//   let compiler = webpack(item);
//   let instant = middleware({ compiler: compiler });

//   app.use(instant);
// });
let compiler = webpack(settings[1]);
let instant = middleware({ compiler: compiler, publicPath: '../build/' });
app.use(instant);

app.listen(8050);
