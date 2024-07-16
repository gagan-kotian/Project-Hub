import React, { useState } from "react";
import { Typography, TextField, Button, Paper, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import "./Create.css"; // Import custom CSS

const initial = {
  name: "",
  feedback: "",
  mark: "",
};

const NewFeedback = () => {
  const navigate = useNavigate();
  const { projectid, feedid } = useParams(); // Get projectid and feedbackid from URL params
  const [form, setForm] = useState(initial);
  const [message, setMessage] = useState(""); // State to store success or failure message

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...form,
      projectId: projectid, // Correct the property name
      feedbackId: feedid, // Correct the property name
    };

    fetch("http://localhost:8080/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setMessage("Successful");
        setTimeout(() => {
          navigate(`/feedback/${projectid}`); // Navigate back to feedback page
        }, 2000); // Redirect after 2 seconds
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Failed");
      });
  };

  const handleChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const { name, feedback, mark } = form;

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center p-4 font-serif">
      <Paper className="p-8 max-w-md w-full rounded-lg shadow-lg bg-white">
        <Typography className="text-center mb-8 text-2xl font-bold text-gray-800">
          Give Feedback
        </Typography>
        {message && (
          <Typography
            className={`text-center mb-4 ${
              message === "Successful" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </Typography>
        )}
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
              onChange={(e) => handleChange(e, "feedback")}
              label="Feedback"
              variant="outlined"
              value={feedback}
              multiline
              rows={4}
              fullWidth
              className="custom-textfield"
            />
            <TextField
              required
              onChange={(e) => handleChange(e, "mark")}
              label="Mark"
              variant="outlined"
              value={mark}
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

export default NewFeedback;
