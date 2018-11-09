const Router = require('koa-router');
const router = new Router();
const fare = require('./controllers/fare.js');

router
  .get('/route', fare.getFare)
  .get('./uber', fase.getUber);

module.exports = router;
