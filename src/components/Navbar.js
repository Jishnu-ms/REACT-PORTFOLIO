import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Separate CSS file for Navbar-specific styles

const Navbar = () => {
  return (
    <header className="top">
      <h1 className="h1">My Portfolio</h1>
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
