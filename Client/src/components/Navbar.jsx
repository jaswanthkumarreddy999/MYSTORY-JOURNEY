import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { User, LogOut, Settings } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const activeUrl = location.pathname;
  const { setModelOpen, profile, user, loading, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/roadmaps", label: "Roadmaps" },
    { path: "/practice-sheets", label: "Practice Sheets" },
    { path: "/resources", label: "Resources" },
    { path: "/courses", label: "Courses" },
    { path: "/leaderboards", label: "Leaderboards" },
  ];

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-10 py-5 bg-white border-b border-gray-200 sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-3">
          <img
            src="https://ik.imagekit.io/jezimf2jod/ChatGPT%20Image%20Aug%2027,%202025,%2004_53_09%20PM.png?updatedAt=1756293878873"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="font-bold text-lg">MSJourneyX</h1>
        </div>
      </Link>

      {/* Nav Links */}
      <ul className="hidden gap-8 text-[16px] relative md:flex">
        {navLinks.map(({ path, label }) => (
          <li key={path} className="relative group">
            <Link
              to={path}
              className={`pb-1 transition-colors duration-300 ${
                activeUrl === path
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {label}
            </Link>
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${
                activeUrl === path ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </li>
        ))}
      </ul>

      {/* Auth / Profile */}
      {loading && user ? (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
          <div className="w-20 h-4 rounded bg-gray-300 animate-pulse"></div>
        </div>
      ) : user ? (
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <User className="w-6 h-6" />
            <span className="font-medium">{user?.sub.slice(0, 4) || "Guest"}</span>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                <Settings className="w-4 h-4" />
                Profile
              </Link>
              <button
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 transition-colors"
                onClick={() => {
                  logout();
                  setDropdownOpen(false);
                }}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div
          className="relative overflow-hidden items-center justify-center px-6 py-2 rounded-full border text-md text-black group cursor-pointer"
          onClick={() => setModelOpen(true)}
        >
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <button className="relative z-10 group-hover:text-white transition-colors duration-300 hover:shadow-2xl">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
