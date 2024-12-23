const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const PostController = require("./controllers/PostController");

dotenv.config();

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/", PostController);

// Start Server
app.listen(8080, () => {
  console.log(`Server is running at `);
});
