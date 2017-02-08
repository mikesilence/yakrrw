import Koa from 'koa';

const app = new Koa();
const assetsPath = 'http://localhost:8050/build';

app.use(async (ctx) => {
  ctx.body = `<body><h1>js - forever</h1><script type="application/javascript" src="${assetsPath}/application.js"></script></body>`;
});

app.listen(8888);
