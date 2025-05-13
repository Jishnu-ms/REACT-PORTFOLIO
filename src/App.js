import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Qualifications from "./pages/Qualifications";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
       
      </Routes>
    </Router>
  );
};

export default App;

