import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import the Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main> {/* Page-specific content */}
      <Footer /> {/* Footer added */}
    </div>
  );
};

export default Layout;

