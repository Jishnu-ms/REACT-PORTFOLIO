import React from "react";
import "./Skills.css"; // Add custom styles here
import Layout from "../components/Layout";
import "aos/dist/aos.css"; // AOS animation library
import AOS from "aos";
import { useEffect } from "react";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "HTML",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Git",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  },
  {
    name: "Java",
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    name: "C",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Bootstrap",
    image: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  },
  {
    name: "DSA",
    image: "https://cdn-icons-png.flaticon.com/512/306/306232.png",
  },
];

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <Layout>
    <div className="app">
        <div style={{ height: '50px', }}>
  
</div>
      <header className="header text-center py-3">
        <h1 className="dis"  data-aos="fade-down"><b>Skills</b></h1>
        <p className="le">Here are some of my technical skills</p>
      </header>

      <div className="container">
        <div className="row">
          {skills.map((skill, index) => (
            <div
              className="col-md-4 col-sm-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              key={index}
            >
              <SkillCard name={skill.name} image={skill.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div style={{ height: '50px', }}>
  
  </div>
    </Layout>
  );
}

export default App;

