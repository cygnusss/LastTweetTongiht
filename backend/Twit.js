// This script will help connecting to the twitter API via the twit node-module
const TwitterAPI = require("twit");

const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

const Twit = TwitterAPI(config);

// By default gets latest 20 tweets from John Oliver's twitter account
// Since sending a GET request is async it is convinient to have a promise
module.exports.getTweets = (max_id, screen_name="iamjohnoliver", count=20) => new Promise((resolve, reject) => {
  Twit.get("statuses/user_timeline", { max_id, screen_name, count })
    .catch(err => reject(err))
    .then(({ data }) => resolve(data));
})