import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      const postsWithIds = response.data.map((post, index) => ({
        ...post,
        id: index,
      })); // Assign sequential ID
      setPosts(postsWithIds);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/allPosts`);
      const postsWithIds = response.data.map((post, index) => ({
        ...post,
        id: index,
      })); // Assign sequential IDs
      setPosts(postsWithIds);
    };
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  const handleFeedbackClick = (id) => {
    console.log("Navigating to feedback with projectId:", id); // Debugging line
    navigate(`/feedback/${id}`);
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Box
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          >
            <Button variant="outlined">
              <Link to="/">Home</Link>
            </Button>
          </Box>

          <TextField
            fullWidth
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className="mb-4"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.name}
                </h2>
                <p className="text-gray-600 mb-2">Title: {post.title}</p>
                <p className="text-gray-600 mb-2">Description: {post.desc}</p>
                <p className="text-gray-600 mb-2">
                  Project Link:{" "}
                  <a
                    href={post.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {post.projectLink}
                  </a>
                </p>
                <p className="text-gray-600">Feedback: {post.feedback}</p>
                <div className="mt-4">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleFeedbackClick(post.id)} // Navigate to Feedback with project ID
                    className="btn btn-primary mb-4 md:mb-0 md:mr-4"
                  >
                    Give Feedback
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
