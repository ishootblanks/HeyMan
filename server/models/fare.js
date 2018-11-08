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
  duration: Number,
  estimate: String,
  currency_code: String
});

const myModel = mongoose.model('fare', mySchema);


exports.getEstimate = (data) => {
  console.log(data);
  // return myModel.find(sthg[0].estimate);
};

exports.postEstimate = sthg => {
  console.log("get fare from cabify");
};
