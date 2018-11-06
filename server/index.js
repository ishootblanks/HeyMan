const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyParser');

app
  .use(bodyParser())
  .use(cors())

  app.listen(3000);
console.log('starting app');
