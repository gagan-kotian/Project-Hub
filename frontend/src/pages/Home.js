import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="root">
      <div class="bg-blue-100 min-h-screen flex flex-col justify-center items-center font-serif">
        <h1 class="text-3xl md:text-5xl font-bold text-center mb-8 text-blue-900">
          PROJECT ZONE
        </h1>
        <div class="flex flex-col md:flex-row items-center justify-center">
          <a
            class="btn btn-primary mb-4 md:mb-0 md:mr-4"
            href="/employer/dashboard"
          >
            New Project
          </a>
          <a class="btn btn-secondary" href="/employee/feed">
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
