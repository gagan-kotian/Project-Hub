import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import "./GiveFeedback.css";

const GiveFeedback = () => {
  const { projectid, feedid } = useParams();
  const navigate = useNavigate();

  const handleNewFeedbackClick = () => {
    navigate(`/new-feedback/${projectid}/${feedid}`);
  };

  const handleViewFeedbacksClick = () => {
    navigate(`/view-feedbacks/${projectid}/${feedid}`);
  };

  return (
    <div className="give-feedback">
      <Typography sx={{ margin: "5%" }} variant="h3" align="center">
        PROJECT ZONE
      </Typography>
      <div>
        <ul className="ul">
          <li>
            <Button
              sx={{
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                padding: "20px 40px",
                fontSize: "20px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#2a6db5",
                  transform: "translateY(-3px)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                },
              }}
              onClick={handleNewFeedbackClick}
            >
              New Feedback
            </Button>
          </li>
          <li>
            <Button
              sx={{
                backgroundColor: "#6b7280",
                color: "#ffffff",
                padding: "20px 40px",
                fontSize: "20px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#565b63",
                  transform: "translateY(-3px)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                },
              }}
              onClick={handleViewFeedbacksClick}
            >
              View Feedbacks
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GiveFeedback;
