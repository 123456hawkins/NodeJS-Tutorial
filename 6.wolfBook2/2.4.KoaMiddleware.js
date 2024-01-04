const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.url === '/favicon.ico') {
    return;
  }
  await next();
});

app.use(async (ctx, next) => {
  console.log('第1个中间件 before1');
  await next();
  console.log('第1个中间件 after2');
});

app.use(async (ctx, next) => {
  console.log('第2个中间件 before3');
  await next();
  console.log('第2个中间件 after4');
});

app.use(async (ctx, next) => {
  console.log('业务处理');
  ctx.body = 'success';
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
