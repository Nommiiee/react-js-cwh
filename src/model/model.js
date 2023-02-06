const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});

module.exports = mongoose.model("News", newsSchema);