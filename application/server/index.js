import Koa from 'koa';

var app = Koa();

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);