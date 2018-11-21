const fare = require('../models/fare.js');
const fetch = require('node-fetch');
const constants = require('../constants');

exports.getFare = async (ctx, next) => {
  ctx.body = await fare.getEstimate();
  ctx.status = 200;
}

exports.getToken = async (ctx) => {
  const url = `https://login.uber.com/oauth/v2/token?client_id=${constants.UBERCLIENTID}&client_secret=${constants.CLIENTSECRET}&grant_type=authorization_code&redirect_uri=${constants.LOCALURL}&code=${ctx.request.header.temptoken}&scope=delivery+history+history_lite+places+profile`;
  let token;
  await fetch(url,
    {
      method: 'POST',
    })
    .then(res => res.json())
    .then(res => {
      token = res;
    });
    ctx.body = token;
    ctx.status = 200;
}

exports.getEstimate = async (ctx) => {
  const coordinates = ctx.request.header.coordinates.split(' ').map(el => +el);
  const url = `https://api.uber.com/v1.2/estimates/price?start_latitude=${coordinates[0]}&start_longitude=${coordinates[1]}&end_latitude=${coordinates[2]}&end_longitude=${coordinates[3]}`;
  let body;
  await fetch(url,
    {
      method: 'GET',
      headers: {
        'Authorization': `Token M54HaRqvUXHSgKB_Enta8hz01JIW-4fz4dp8k3qn`,
        'Accept-Language': 'en_US',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => {
      body = res;
    });
    ctx.body = body;
    ctx.status = 200;
}
