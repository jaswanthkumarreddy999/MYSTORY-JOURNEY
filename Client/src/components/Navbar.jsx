import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const activeUrl = location.pathname;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/roadmaps", label: "Roadmaps" },
    { path: "/practice-sheets", label: "Practice Sheets" },
    { path: "/resources", label: "Resources" },
    { path: "/courses", label: "Courses" },
    { path: "/leaderboards", label: "Leaderboards" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-6  bg-white border-b border-gray-200 shadow-md">
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
      <ul className="flex gap-8 text-[16px] relative">
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
            {/* underline animation */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${
                activeUrl === path ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </li>
        ))}
      </ul>

      {/* Auth buttons */}
      <div className="relative overflow-hidden flex items-center justify-center px-6 py-2 rounded-full border  text-md text-black group cursor-pointer">
  {/* Background layer for bottom-to-top fill */}
  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
  
  {/* Text */}
  <Link to="/signin" className="relative z-10 group-hover:text-white transition-colors duration-300 hover:shadow-2xl">
    Sign In
  </Link>
</div>

    </nav>
  );
};

export default Navbar;
