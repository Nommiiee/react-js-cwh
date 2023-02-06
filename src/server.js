const express = require("express");
const app = express();
const mongoose = require("mongoose");
const News = require("./model/model");
const NewsData = require("./mockData.json");
const cors = require("cors");
const userSchema = require("./model/user.js");

app.use(express.json());

mongoose.set("strictQuery", true);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.listen(3001, () => {
  console.log("Server running on port 3001");

  mongoose
    .connect("mongodb://127.0.0.1:27017/DB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    });
});

app.get("/Fetch", async (req, res, next) => {
  try {
    const skip = req.query.skip || 5;
    const limit = req.query.limit || 10;
    let extraContent = true;
    const news = await News.find().limit(limit).skip(skip);

    if (news.length === 0) {
      extraContent = false;
    }
    res.json({
      articles: news,
      skip: skip,
      limit: limit,
      moreContent: extraContent,
    });
    next();
  } catch (error) {
    console.log(error);
  }
});

async function createNews() {
  try {
    await News.deleteMany({});
    await News.insertMany(NewsData.articles);
  } catch (error) {
    console.log(error);
  }
}

app.post("/register", async (req, res, next) => {
  try {
    const { userName, password, email, firstName, lastName } = req.body;
    const user = new userSchema({
      userName,
      password,
      email,
      firstName,
      lastName,
    });
    await user.save();
    res.json({ message: "User created", user: user });
  } catch (error) {
    console.log(error);
  }
});

app.get("/userInfo", async (req, res, next) => {
  try {
    const user = await userSchema.find();
    res.json(user);
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
app.use((err, req, res, next) => {
  try {
    res.status(500).json({ message: err.message });
  } catch (error) {
    console.log(error);
  }
});

createNews();
