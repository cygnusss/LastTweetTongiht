require('dotenv').config()

const express = require("express");
const path = require("path");
const TwitterAPI = require("./Twit.js");
const BigNumber = require("bignumber.js");

const app = express();
const dist = path.join(__dirname, "../client/dist/");

app.use(express.static(dist))

// The tweets route returns 20 tweets each time it is requested
// Each time it is requested it will save last tweet ID and get tweets that have older IDs
let max_id = undefined;
app.get("/tweets", (req, resp) => {
  // Check out Twit.js to see how this method works
  TwitterAPI.getTweets(max_id)
    .then((data) => {
      // Tweet_ids are really big numbers
      // so in order to avoid possible issues (duplicate tweets or loosing tweets)
      // I used the BigNumber module that lets you properly work with big numbers
        // Saving last tweet's id and substracting 1 from it allows to fetch
        // tweets with IDs less then that of the last fetched tweet
      const id_str = data[data.length - 1].id_str;
      max_id = BigNumber(id_str).minus(1).toString(10);

      resp.send(data);
      resp.end();
    })
    .catch((err) => {
      throw new Error("Error while fetching data:", err);
    })
})

app.get("*", (req, resp) => resp.sendFile(dist + "index.html"));

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log("Succesfully running on port:", PORT));
module.exports = app;