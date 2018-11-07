const fare = require('../models/fare.js');

exports.getFare = async (ctx, next) => {
  ctx.body = await fare.getEstimate();
  ctx.status = 200;
}

exports.postFare = async (ctx, next) => {
  ctx.body = await fare.postEstimate(ctx.request.body);
  ctx.status = 201;
}
