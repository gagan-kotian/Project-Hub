const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
  projectId: { type: String, required: true },
  feedbackId: { type: String, required: true },
  name: { type: String, required: true },
  feedback: { type: String, required: true },
  mark: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feed", FeedSchema);
