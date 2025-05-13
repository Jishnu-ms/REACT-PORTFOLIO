import React, { useState } from "react";
import "./Resume.css";
import Layout from "../components/Layout";

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  const openResume = () => setShowModal(true);
  const closeResume = () => setShowModal(false);

  return (
    <Layout>
      <div className="res">
        <br></br>
        <br></br>
        <h2 className="info">Resume</h2>

        <div className="resume-tile" onClick={openResume}>
          <h3>📄 View Resume</h3>
        </div>

        {showModal && (
          <div className="modal-overlay" onClick={closeResume}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeResume}>X</button>
              <iframe
                src="/pictures/Jishn.pdf"
                title="Resume PDF"
                width="100%"
                height="600px"
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Resume;
