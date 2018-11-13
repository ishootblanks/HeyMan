const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('../data.json');



const mySchema = new Schema({
  localized_display_name: String,
  distance: Number,
  display_name: String,
  product_id: String,
  high_estimate: Number,
  low_estimate: Number,
  duration: String,
  estimate: String,
  currency_code: String
});

const myModel = mongoose.model('fare', mySchema);

exports.getEstimate = () => {
  let num = Math.floor(Math.random() * 3);
  const obj = {
    price: data[num].estimate,
    distance: data[num].distance,
    time: data[num].duration
  };
  return obj;
};
