import React from "react";
import Layout from "../components/Layout";
import "./Portfolio.css"; // Add this CSS file for the Portfolio page-specific styles
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <div className="portfolio">
      <div style={{ height: '50px', }}>
  
</div>

        <center>
          <section>
            <h2 className="info" data-aos="fade-down">
              <b>PROJECTS</b>
            </h2>
            <p className="about-me">
              Here are some of the projects I have worked on
            </p>
            <br />
            <div className="container">
              <div className="row">
                {/* Tile 1 - Portfolio */}
                <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="100">
                  <div
                    className="tile text-center"
                    onClick={() => openPopup("cv/index2.html")}
                  >
                    <h1 className="tt">PORTFOLIO</h1>
                    <br></br>
                    <img
                      className="car"
                      src="https://codehalweb.com/wp-content/uploads/2023/05/thumbnail-19-741x486.jpg"
                      alt="Portfolio Project"
                    />
                  </div>
                </div>

                {/* Tile 2 - Login Page */}
                <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="200">
                  <div
                    className="tile text-center"
                    onClick={() => openPopup("Logi/facebook.html")}
                  >
                    <h1 className="tt">LOGIN PAGE</h1>
                    <br></br>
                    <img
                      className="car"
                      src="https://codewithfaraz.com/img/login1.png"
                      alt="Login Page Project"
                    />
                  </div>
                </div>

                {/* Tile 3 - Calculator */}
                <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="300">
                  <div
                    className="tile text-center"
                    onClick={() => openPopup("Calculator/calc.html")}
                  >
                    <h1 className="tt">CALCULATOR</h1>
                    <br></br>
                    <img
                      className="car"
                      src="https://www.inspiruseducation.com/wp-content/uploads/2023/11/Four-function-Calculators.png"
                      alt="Calculator Project"
                    />
                  </div>
                </div>

                <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="200">
                  <div
                    className="tile text-center"
                    onClick={() => openPopup("Logi/facebook.html")}
                  >
                    <h1 className="tt">SAMPLE</h1>
                    <br></br>
                    <img
                      className="car"
                      src="https://codewithfaraz.com/img/login1.png"
                      alt="Login Page Project"
                    />
                  </div>
                </div>

                <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="200">
                  <div
                    className="tile text-center"
                    onClick={() => openPopup("Logi/facebook.html")}
                  >
                    <h1 className="tt">NETFLIX CLONE</h1>
                    <br></br>
                    <img
                      className="car"
                      src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
                      alt="Login Page Project"
                    />
                  </div>
                </div>

                <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="200">
                  <div
                    className="tile text-center"
                    onClick={() => openPopup("Logi/facebook.html")}
                  >
                    <h1 className="tt">TODO APP</h1>
                    <br></br>
                    <img
                      className="car"
                      src="https://play-lh.googleusercontent.com/92xIZAW-mdwucFX1v8kyTXlLVgZfLczHv8XCVOH1tFc0M3cTRI4q9qJLUM96PqCrgWjc"
                      alt="Login Page Project"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Popup Container */}
            <div id="popup" className="popup">
              <div className="popup-content">
                <button className="close-btn" onClick={closePopup}>
                  ×
                </button>
                <iframe id="popup-iframe" src="" frameBorder="0"></iframe>
              </div>
            </div>
          </section>
        </center>
      </div>
      <div style={{ height: '50px', }}>
  
  </div>
    </Layout>
  );

  // JavaScript functions for popup
  function openPopup(url) {
    const popup = document.getElementById("popup");
    const iframe = document.getElementById("popup-iframe");
    iframe.src = url;
    popup.style.display = "flex"; // Use flexbox to center the popup
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    document.getElementById("popup-iframe").src = ""; // Stop iframe content when closing
}

};

export default Portfolio;

