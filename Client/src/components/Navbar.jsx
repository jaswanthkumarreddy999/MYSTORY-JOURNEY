import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        <h1 className="font-bold text-lg">CodeLearn</h1>
      </div>

      <ul className="flex gap-6 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/roadmaps">Roadmaps</Link></li>
        <li><Link to="/practice-sheets">Practice Sheets</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/leaderboards">Leaderboards</Link></li>
      </ul>

      <div className="flex gap-4 font-medium">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
