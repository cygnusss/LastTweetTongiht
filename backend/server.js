const express = require("express");
const path = require("path");

const app = express();
const dist = path.join(__dirname, "../client/dist/");

app.use(express.static(dist))

app.get("*", (req, resp) => resp.sendFile(dist + "index.html"))

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log("Succesfully running on port:", PORT));