const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const router = require('./router.js');

mongoose.connect('mongodb://localhost:27017/taxidata', {useNewUrlParser: true});
const db = mongoose.connection;

app
  .use(bodyParser())
  .use(cors())
  .use(router.routes());

app.listen(3000);
console.log('starting app');
