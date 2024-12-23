const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  projectLink: { type: String, required: false },
  feedback: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
