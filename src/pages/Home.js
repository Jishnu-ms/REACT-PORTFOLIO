import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import Layout from "../components/Layout";
const Home = () => {
  return (
    <Layout>
       <div style={{ height: '50px',}}>
  
  </div>
    <div className="home">
      <div className="main">
        <section className="sec">
          <div className="first">
            <h2 className="info">About Me</h2>
            <img
              className="image"
              src="https://media.licdn.com/dms/image/v2/D5603AQGHodjXzzpZbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724867366574?e=1743638400&v=beta&t=v3hXKMQNt0Ok8X1oyjgevYxBPHAk_rwiABijMEFjOKE"
              alt="Description of image"
              width="200"
              height="150"
            />
          </div>
          <p className="info_2">Hi, I'm</p>
          <p className="name"><b>Jishnu MS</b></p>
          <p className="info_2">
            Welcome to my personal website where I share my work and skills.
          </p>
          <section className="about-me">
            <p>
              I am currently pursuing a degree in Software Engineering at Kerala
              Technological University, where I have gained knowledge in HTML,
              CSS, JavaScript, React, and more.
            </p>
            <br />
            <p>
              I enjoy problem-solving and tackling challenging digital tasks.
            </p>
            <p>
              I have experience with Git, Bootstrap, and Java, and I’m
              continuously learning about web development.
            </p>
            <br />
            <p>I aspire to build secure web applications.</p>
            <br />
            <p>
              In my free time, I love exploring new technologies, participating
              in hackathons, and working on personal projects.
            </p>
            <br />
            <p>
              Feel free to reach out if you’d like to collaborate or just chat
              about tech!
            </p>
            <Link to="/contact">
              <button type="button" className="but">Contact Me</button>
            </Link>
          </section>
        </section>
      </div>
    </div>
    </Layout>
  );
};

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

export default Home;
