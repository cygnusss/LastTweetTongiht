require('dotenv').config()

const express = require("express");
const path = require("path");
const TwitterAPI = require("./Twit.js");
const BigNumber = require("bignumber.js");

const app = express();
const dist = path.join(__dirname, "../client/dist/");

app.use(express.static(dist))

// The tweets route returns 20 tweets each time it is requested
// The route has a max_id parameter which sets the max_id for tweets when calling API
app.get("/tweets", (req, resp) => {
  const max_id = req.query.max_id;
  // Check out Twit.js to see how this method works
  TwitterAPI.getTweets(max_id)
    .then((data) => {
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