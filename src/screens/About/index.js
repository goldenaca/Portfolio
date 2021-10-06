import React from "react";
import "./about.css";
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
        <main className="info-container">
          <p className="title"> ABOUT ME </p>
          <p className="text">
            Hello ! My name is{" "}
            <span className="color-blue">Sebastian Matias Saporiti</span>, I was
            born in 1998 and grew up in Bariloche - Argentina. <br /> I
            graduated from a technical high school ( Escuela Cooperativa Técnica
            Los Andes ). This gave me the possibility of doing an internship at
            INVAP where we work on international projects and I had the
            opportunity to work as a team with several technicians and
            engineers.
          </p>
          <p className="title"> CURRENTLY </p>
          <p className="text">
            Since 2019 I live in Capital Federal – Argentina where I started my
            passion for web development and started a career at the UBA. I
            consider myself a self-taught person with a great capacity for
            learning and I always seek to understand how thing works. I
            periodically spend part of my day to expanding and improving my
            skills as a developer through personal projects or courses.
          </p>
          <div className="icons-container">
            <div className="icon-box">
              <a
                className="a-tag"
                href="https://www.linkedin.com/in/sebastian-saporiti"
              >
                <i class="fab fa-linkedin about-icons"></i>
              </a>
              <p className="about-icon-description"> Linkedin profile</p>
            </div>
            <div className="icon-box">
              <a
                className="a-tag"
                href="https://drive.google.com/file/d/1YdARpXxumjwY1p8x7FbyLCZBs1iWDpqq/view?usp=sharing"
              >
                <i class="fas fa-file-code about-icons"></i>
              </a>
              <p className="about-icon-description"> Curriculum</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
