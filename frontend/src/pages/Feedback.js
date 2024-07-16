import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import "./Feedback.css";

const Feedback = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleCardClick = (feedid) => {
    navigate(`/givefeedback/${projectId}/${feedid}`);
  };

  return (
    <div className="feedback-page">
      <br></br>
      <Typography variant="h3" component="div" className="feedback-heading">
        Feedback Zone
      </Typography>
      <div className="feedback-container">
        <Card onClick={() => handleCardClick("0")} className="feedback-card">
          <CardContent className="feedback-card-content">
            <Typography
              variant="h5"
              component="div"
              className="feedback-card-title"
            >
              Zeroth Review
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleCardClick("1")} className="feedback-card">
          <CardContent className="feedback-card-content">
            <Typography
              variant="h5"
              component="div"
              className="feedback-card-title"
            >
              Mid Term Review
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleCardClick("2")} className="feedback-card">
          <CardContent className="feedback-card-content">
            <Typography
              variant="h5"
              component="div"
              className="feedback-card-title"
            >
              Internal Final Review
            </Typography>
          </CardContent>
        </Card>
        <Card onClick={() => handleCardClick("3")} className="feedback-card">
          <CardContent className="feedback-card-content">
            <Typography
              variant="h5"
              component="div"
              className="feedback-card-title"
            >
              External Final Review
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
