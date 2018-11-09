const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('../data.json');
const rp = require('request-promise-native');


const mySchema = new Schema({
  localized_display_name: String,
  distance: Number,
  display_name: String,
  product_id: String,
  high_estimate: Number,
  low_estimate: Number,
  duration: Number,
  estimate: String,
  currency_code: String
});

const myModel = mongoose.model('fare', mySchema);

exports.getEstimate = () => {
  const obj = {
    price: data[1].estimate
  };
  return obj;
};

exports.getPrice = () => {
  const info = await rp('https://api.uber.com/v1.2/estimates/price');
  ctx.body = info;
};
