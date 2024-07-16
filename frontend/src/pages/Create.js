import React, { useState } from "react";
import { Typography, TextField, Button, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Create.css"; // Import custom CSS

const initial = {
  name: "",
  title: "",
  desc: "",
  projectLink: "",
  feedback: "",
};

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/employee/feed"); // Move navigation here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const { name, title, desc, projectLink, feedback } = form;

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center p-4 font-serif">
      <Paper className="p-8 max-w-md w-full rounded-lg shadow-lg bg-white">
        <Typography className="text-center mb-8 text-2xl font-bold text-gray-800">
          Create New Project
        </Typography>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box className="grid grid-cols-1 gap-6">
            <TextField
              required
              onChange={(e) => handleChange(e, "name")}
              label="Name"
              variant="outlined"
              value={name}
              fullWidth
              className="custom-textfield"
            />
            <TextField
              required
              onChange={(e) => handleChange(e, "title")}
              label="Title"
              variant="outlined"
              value={title}
              fullWidth
              className="custom-textfield"
            />
            <TextField
              required
              onChange={(e) => handleChange(e, "desc")}
              label="Description"
              variant="outlined"
              value={desc}
              multiline
              rows={4}
              fullWidth
              className="custom-textfield"
            />
            <TextField
              required
              onChange={(e) => handleChange(e, "projectLink")}
              label="Project Link"
              variant="outlined"
              type="url"
              value={projectLink}
              fullWidth
              className="custom-textfield"
            />
            <TextField
              required
              onChange={(e) => handleChange(e, "feedback")}
              label="Feedback"
              variant="outlined"
              value={feedback}
              multiline
              rows={4}
              fullWidth
              className="custom-textfield"
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              className="custom-button"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default Create;
