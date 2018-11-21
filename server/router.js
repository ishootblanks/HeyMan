const Router = require('koa-router');
const router = new Router();
const controller = require('./controllers/controller.js');

router
  .get('/route', controller.getFare)
  .get('/auth', controller.getToken)
  .get('/estimate', controller.getEstimate)

module.exports = router;
