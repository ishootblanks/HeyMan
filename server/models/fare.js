const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('../data.json');
const rp = require('request-promise-native');
const key = require('../.env');


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
  let num = Math.floor(Math.random() * 3);
  const obj = {
    price: data[num].estimate,
    distance: data[num].distance,
    time: data[num].duration
  };
  return obj;
};

// const  httpOptions = {
//     headers: new HttpHeaders({
//       'Authorization': auth.UBERKEY,
//       'Accept-Language': 'en_US',
//       'Content-Type': 'application/json'
//     })
//   };

exports.getPrice = async (ctx, next) => {
  const info = await rp({
    uri: 'https://api.uber.com/v1.2/estimates/price',
    qs: {
      start_latitude: params.params[0],
      start_longitude: params.params[1],
      end_latitude: params.params[2],
      end_longitude: params.params[3],
    },
    headers: {

        Authorization: key.UBER_KEY,
        'Accept-Language': en_US,
        'Content-Type': application/json
    },
    json: true
  });

  // ctx.body = info;
};
