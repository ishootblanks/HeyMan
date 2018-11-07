const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyParser');

const router = require('./router.js');

app
  .use(bodyParser())
  .use(cors())
  .use(router.routes());

  app.listen(3000);
console.log('starting app');
