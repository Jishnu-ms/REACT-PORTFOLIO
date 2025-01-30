import React, { useState } from "react";
import Layout from "../components/Layout";
import './Contact.css'


const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    checked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting me!"); // Replace with your actual form submission logic
  };

  return (
    
    <Layout>
     
    <div className="bb">
      <div className="container my-5">
        <h1 data-aos="fade-down" className="info text-center" ><b>Contact Me</b></h1>
        <p className="text-center">
          Feel free to reach out to me through the form below or connect on my social platforms!
        </p>
        <div className="row justify-content-center mt-4" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6 col-md-8">
            <form id="contact-form" onSubmit={handleSubmit} className="shadow p-4 rounded">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
                <small className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your message here..."
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                  name="checked"
                  checked={formData.checked}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="check">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3 col-sm-6 text-center">
            <a
              href="https://www.linkedin.com/in/jishnums830/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png"
                alt="LinkedIn"
                className="img-fluid social-icon"
              />
            </a>
            <p className="mt-2">LinkedIn</p>
          </div>
          <div className="col-md-3 col-sm-6 text-center">
            <a
              href="https://github.com/Jishnu-ms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkUoChNWcIxqfZZb_Z8afzm9UlfX_c06tFA&s"
                alt="GitHub"
                className="img-fluid social-icon"
              />
            </a>
            <p className="mt-2">GitHub</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;

