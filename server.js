const express = require("express");
const app = express();
const mongoose = require("mongoose");
const News = require("./model");
// const data = require("./mockData.json");
const cors = require("cors");
mongoose.set("strictQuery", true);

app.use(cors());

app.listen(3001, () => {
  console.log("Server running on port 3001");

  mongoose
    .connect("mongodb://localhost:27017/DB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    });
});

app.get("/Fetch", async (req, res, next) => {
  try {
    console.log(req.query);
    const skip = req.query.skip || 0;
    const limit = req.query.limit || 10;
    const news = await News.find().limit(limit).skip(skip);
    res.json(news);
    next();
  } catch (error) {
    console.log(error);
  }
});

// create a error handling middleware
app.use((err, req, res, next) => {
  try {
    res.status(500).json({ message: err.message });
  } catch (error) {
    console.log(error);
  }
});

process.on("uncaughtException", (err) => {
  console.log(err);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
});
