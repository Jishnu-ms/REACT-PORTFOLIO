import React, { useEffect } from "react";
import Layout from "../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import './Qualifications.css'
const Qualifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <Layout>
      
    <div className="bb">

      <div style={{ height: '50px', }}>
  
</div>
      <center>
        <section>
          <h2 className="info" data-aos="fade-down">
            <b>Hobbies</b>
          </h2>
          <br />
          <div className="container">
            <div className="row">
              {/* Tile 1 - Coding Side Projects */}
              <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="100">
                <div className="tile2 text-center">
                  <h1 className="tt">Coding Side Projects</h1>
                  <p>
                    I enjoy working on small coding projects that challenge my creativity and problem-solving skills. These projects help me learn new frameworks, experiment with algorithms, and build useful tools.
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Coding" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb"
                      className="card-img-top"
                      alt="Coding Projects"
                    />
                  </a>
                </div>
              </div>

              {/* Tile 2 - Learning New Technologies */}
              <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="200">
                <div className="tile2 text-center">
                  <h1 className="tt">Learning New Technologies</h1>
                  <p>
                    I enjoy exploring cutting-edge technologies, staying updated with industry trends, and expanding my skill set. From new programming languages to frameworks.
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Technology" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://tweakyourbiz.com/wp-content/uploads/2022/05/shutterstock_163229387.jpg"
                      className="card-img-top"
                      alt="Learning Technologies"
                    />
                  </a>
                </div>
              </div>

              {/* Tile 3 - Cybersecurity Challenges */}
              <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="300">
                <div className="tile2 text-center">
                  <h1 className="tt">Cybersecurity Challenges</h1>
                  <p>
                    I participate in Capture the Flag (CTF) competitions and cybersecurity challenges to enhance my problem-solving abilities and understanding of secure systems.
                  </p>
                  <br />
                  <a href="https://en.wikipedia.org/wiki/Cybersecurity" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://blogs.opentext.com/wp-content/uploads/2020/09/shutterstock_1211469496-1000x667-1.jpg"
                      className="card-img-top"
                      alt="Cybersecurity"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </center>
    </div>
    <div style={{ height: '50px', }}>
  
  </div>
    </Layout>
  );
};

export default Qualifications;

