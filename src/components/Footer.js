import React from "react";
import "./Footer.css"; // Optional, for footer-specific styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Jishnu_MS. All Rights Reserved.</p>
      <p>
        Follow me on{" "}
        <a href="https://www.youtube.com/@jishnu3809" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>,{" "}
        <a href="https://www.instagram.com/jishnl_l/profilecard/?igsh=MXZnZDltczZjZDJpbQ==" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </p>
    </footer>
  );
};

export default Footer;
