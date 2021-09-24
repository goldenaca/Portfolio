import React from "react";
import "./projects.css";
import projectsImage from "../../images/Projects.jpg";
import Nav from "../../components/Nav";

function About() {
  const backgroundImage = {
    background: `url(${projectsImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <div className="app-container" style={backgroundImage}>
      <div className="triangle-decoration"></div>
      <div className="main-container">
        <Nav colorData={"projects"} />
      </div>
    </div>
  );
}

export default About;
