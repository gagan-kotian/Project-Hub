import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import GiveFeedback from "./pages/GiveFeedback";
import NewFeedback from "./pages/NewFeed";

import Feedback from "./pages/Feedback";
import ViewFeedbacks from "./pages/ViewFeedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer">
          <Route path="/employer/dashboard" element={<Dashboard />} />
          <Route path="/employer/create" element={<Create />} />
        </Route>
        <Route path="/employee/feed" element={<Feed />} />
        <Route path="/feedback/:projectId" element={<Feedback />} />
        <Route
          path="/givefeedback/:projectid/:feedid"
          element={<GiveFeedback />}
        />
        <Route
          path="/new-feedback/:projectid/:feedid"
          element={<NewFeedback />}
        />
        <Route
          path="/view-feedbacks/:projectid/:feedid"
          element={<ViewFeedbacks />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
