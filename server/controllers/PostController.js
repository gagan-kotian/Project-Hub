const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Feed = require("../models/Feed");

// Get all posts
router.get("/allPosts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search posts by text
router.get("/posts/:text", async (req, res) => {
  try {
    const text = req.params.text;
    const posts = await Post.aggregate([
      {
        $search: {
          index: "default", // Replace with your search index name if needed
          text: {
            query: text,
            path: ["title", "desc"], // Fields to search
          },
        },
      },
      {
        $sort: { createdAt: -1 }, // Sort by creation date in descending order
      },
      {
        $limit: 10, // Limit to 10 results
      },
    ]);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new post
router.post("/post", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new feedback
router.post("/feedbacks", async (req, res) => {
  try {
    const newFeedback = new Feed(req.body);
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all feedbacks
router.get("/feedbacks", async (req, res) => {
  try {
    const feedbacks = await Feed.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
