import Koa from 'koa';

const app = new Koa();
const assetsPath = 'http://localhost:8050/static/assets';

app.use(async (ctx) => {
  ctx.body = `<body><h1>js - forever</h1><script type="application/javascript" src="${assetsPath}/assets.js"></script></body>`;
});

app.listen(8888);
