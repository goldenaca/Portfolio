import React from "react";
import aboutImage from "../../images/About.jpg";
import Nav from "../../components/Nav";

function About() {
  const backgroundImage = {
    background: `url(${aboutImage})`,
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
      </div>
    </div>
  );
}

export default About;
