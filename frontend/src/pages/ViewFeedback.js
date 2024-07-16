import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import "./ViewFeedbacks.css"; // Import custom CSS

const ViewFeedbacks = () => {
  const { projectid, feedid } = useParams();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/feedbacks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch feedbacks");
        }
        return response.json();
      })
      .then((data) => {
        const filteredFeedbacks = data.filter(
          (feedback) =>
            feedback.projectId === projectid && feedback.feedbackId === feedid
        );
        setFeedbacks(filteredFeedbacks);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [projectid, feedid]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Box className="bg-blue-100 min-h-screen flex flex-col justify-center items-center p-4 font-serif">
      <Paper className="p-8 max-w-md w-full rounded-lg shadow-lg bg-white">
        <Typography className="text-center mb-8 text-2xl font-bold text-gray-800">
          Feedbacks for project ID: {projectid} and review type: {feedid}
        </Typography>
        <List>
          {feedbacks.map((feedback) => (
            <ListItem key={feedback.feedbackId} className="feedback-item">
              <ListItemText
                primary={`Name: ${feedback.name}`}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className="feedback-text"
                    >
                      Feedback: {feedback.feedback}
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      className="feedback-mark"
                    >
                      Mark: {feedback.mark}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ViewFeedbacks;
