import React, { useState } from "react";
import { Box, Tab, Typography, Button } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import Create from "./Create";

const Dashboard = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
      <Box className="container mx-auto p-4">
        <Typography
          variant="h3"
          className="text-3xl font-bold mb-8 text-center"
        >
          PROJECT DASHBOARD
        </Typography>
        <TabContext value={value}>
          <Box className="border-b border-gray-200">
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                className="text-lg font-semibold"
                label="Create Post"
                value="1"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Create />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Dashboard;
