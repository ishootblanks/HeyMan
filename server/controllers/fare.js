const fare = require('../models/fare.js');

exports.getFare = async (ctx, next) => {
  ctx.body = await fare.getEstimate();
  ctx.status = 200;
}
