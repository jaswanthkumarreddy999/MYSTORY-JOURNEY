import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Roadmaps from "./pages/Roadmaps";
import PracticeSheets from "./pages/PracticeSheets";
import Resources from "./pages/Resources";
import Courses from "./pages/Courses";
import Leaderboards from "./pages/Leaderboards";
//import Login from "./pages/Login";
//import Signup from "./pages/Signup";
//import Profile from "./pages/Profile";

function App() {
  return (
    <Layout>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/practice-sheets" element={<PracticeSheets />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
