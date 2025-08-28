import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-8 border-t border-gray-200">
      <div className="mx-auto px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Tagline */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img 
              src="https://ik.imagekit.io/jezimf2jod/ChatGPT%20Image%20Aug%2027,%202025,%2004_53_09%20PM.png?updatedAt=1756293878873" 
              alt="Logo" 
              className="w-12 h-12 rounded-full border border-gray-200" 
            />
            <h1 className="font-bold text-xl text-gray-900">MSJourneyX</h1>
          </Link>
          <p className="text-sm leading-relaxed text-gray-600">
            A platform to guide your coding journey with roadmaps, practice, and resources 🚀.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Explore</h3>
          <ul className="space-y-2 text-sm">
            {[
              { path: "/roadmaps", label: "Roadmaps" },
              { path: "/practice-sheets", label: "Practice Sheets" },
              { path: "/resources", label: "Resources" },
              { path: "/courses", label: "Courses" },
              { path: "/leaderboards", label: "Leaderboards" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="relative inline-block group"
                >
                  <span className="transition-colors group-hover:text-black">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black transition">About Us</a></li>
            <li><a href="#" className="hover:text-black transition">Careers</a></li>
            <li><a href="#" className="hover:text-black transition">Blog</a></li>
            <li><a href="#" className="hover:text-black transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MSJourneyX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
