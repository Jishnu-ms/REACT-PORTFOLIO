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
      <div style={{ height: '100px', }}>
  
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
                    <img
                      className="car"
                      src="https://www.inspiruseducation.com/wp-content/uploads/2023/11/Four-function-Calculators.png"
                      alt="Calculator Project"
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
      <div style={{ height: '100px', }}>
  
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

