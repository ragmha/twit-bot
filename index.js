const Twit = require('twit');
require('dotenv').config();

let bot = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

bot.post(
  'statuses/update',
  {
    status: 'hello world!',
  },
  (err, data, response) => {
    if (err) console.error(err);
    else console.log(`${data.text} was tweeted.`);
  }
);
