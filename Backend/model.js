//Write missing codes here
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const BlogModel = mongoose.model("blog", schema);

//Write missing codes here

module.exports = BlogModel;