const express = require("express");
const app = express();
const data = require("./mockData.json");
const cors = require("cors");

app.use(cors());

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

app.get("/Fetch", (req, res) => {
  res.json(data);
});
