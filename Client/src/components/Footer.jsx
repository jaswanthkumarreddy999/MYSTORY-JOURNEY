import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Description */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img 
              src="https://ik.imagekit.io/jezimf2jod/ChatGPT%20Image%20Aug%2027,%202025,%2004_53_09%20PM.png?updatedAt=1756293878873" 
              alt="Logo" 
              className="w-12 h-12 rounded-full" 
            />
            <h1 className="font-bold text-lg">MSJourneyX</h1>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your all-in-one platform for roadmaps, resources, and practice to 
            level up your coding journey 🚀.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link to="/roadmaps" className="hover:text-gray-900">Roadmaps</Link></li>
            <li><Link to="/practice-sheets" className="hover:text-gray-900">Practice Sheets</Link></li>
            <li><Link to="/resources" className="hover:text-gray-900">Resources</Link></li>
            <li><Link to="/courses" className="hover:text-gray-900">Courses</Link></li>
            <li><Link to="/leaderboards" className="hover:text-gray-900">Leaderboards</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Connect with us</h3>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-gray-900 transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MSJourneyX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
