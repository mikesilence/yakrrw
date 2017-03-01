import Koa from 'koa';

const app = new Koa();
const assetsPath = 'http://localhost:8050/build';

app.use(async (ctx) => {
  ctx.body = `<body>
    <h3 style="color:grey">[js]::[react&redux]</h3>
    <div class="fake_body"></div>
    <script type="application/javascript" src="${assetsPath}/application.js"></script>
    </body>`;
});

app.listen(8888);
