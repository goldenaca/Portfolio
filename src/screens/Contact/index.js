import React from "react";
import "./contact.css";
import contactImage from "../../images/Contact.jpg";
import Nav from "../../components/Nav";

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
        <Nav colorData={"contact"} />
      </div>
    </div>
  );
}

export default About;
