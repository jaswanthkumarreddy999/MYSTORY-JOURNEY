import Navbar from "./Navbar";
import Footer from "./Footer";
import SigninLoginModel from "./SigninLoginModel";
import { TruckElectric } from "lucide-react";
import { useState } from "react";
const Layout = ({ children }) => {
  const [isModelOpen, setModelOpen] = useState(true);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <SigninLoginModel isModelOpen={isModelOpen} setModelOpen={setModelOpen} />
    </div>
  );
};

export default Layout;
