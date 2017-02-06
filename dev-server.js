'use strict';

import Koa from 'koa';
import webpack from 'webpack';
import middleware from 'koa-webpack';
import config from './webpack.config.babel.js';

const app = new Koa();
const compiler = webpack(config);
const instant = middleware({ compiler: compiler });

app.use(instant);
app.listen(8050);
