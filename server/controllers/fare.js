const fare = require('../models/fare.js');

exports.getFare = async (ctx, next) => {
  ctx.body = await fare.getEstimate();
  ctx.status = 200;
}

exports.postFare = async (ctx, next) => {
  const newFare = await fare.postEstimate(ctx.request.body);
  ctx.send(newFare);
  ctx.status = 201;
}
