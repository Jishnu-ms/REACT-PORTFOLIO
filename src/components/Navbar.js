
import { Link } from "react-router-dom";
import "./Navbar.css"; // Separate CSS file for Navbar-specific styles
import React, { useState, useEffect } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   
       <header className={`top ${isScrolled ? "scrolled" : ""}`}>
      <h1 className="h1">JISHNU MS</h1>
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      <nav id="nav-links" className="nav-links">
        <Link className="txt" to="/">Home</Link>
        <Link className="txt" to="/portfolio">Portfolio</Link>
        <Link className="txt" to="/skills">Skills</Link>
        <Link className="txt" to="/qualifications">Hobbies</Link>
        <Link className="txt" to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

export default Navbar;
