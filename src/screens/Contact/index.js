import React from "react";
import "./contact.css";
import contactImage from "../../images/Contact.jpg";
import Nav from "../../components/Nav";
import Form from "../../components/Form";

function About() {
  const backgroundImage = {
    background: `url(${contactImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <div className="app-container" style={backgroundImage}>
      <div className="triangle-decoration"></div>
      <div className="main-container">
        <Nav />
        <div className="contact-info-container">
          <p className="contact-title">CONTACT INFORMATION</p>
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope"></i>
              <p> seba.saporiti@gmail.com</p>
            </li>
            <li>
              <i className="fab fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/sebastian-saporiti">
                www.linkedin.com/in/sebastian-saporiti
              </a>
            </li>
          </ul>
        </div>
        <p className="contact-title">CONTACT FORM</p>
        <Form />
      </div>
    </div>
  );
}

export default About;
