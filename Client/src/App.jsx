import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Roadmaps from "./pages/Roadmaps";
import PracticeBooks from "./pages/PracticeBooks";
import Resources from "./pages/Resources";
import Courses from "./pages/Courses";
import Leaderboards from "./pages/Leaderboards";
//import Login from "./pages/Login";
//import Signup from "./pages/Signup";
//import Profile from "./pages/Profile";
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <AuthProvider>

          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roadmaps" element={<Roadmaps />} />
              <Route path="/praticebooks" element={<PracticeBooks />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/leaderboards" element={<Leaderboards />} />
              {/* <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} /> */}
            </Routes>
          </Layout>

    </AuthProvider>
    
  );
}

export default App;
