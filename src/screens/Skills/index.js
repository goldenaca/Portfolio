import React from "react";
import "./skills.css";
import skillsImage from "../../images/Skills.jpg";
import Nav from "../../components/Nav";

function About() {
  const backgroundImage = {
    background: `url(${skillsImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <div className="app-container" style={backgroundImage}>
      <div className="triangle-decoration"></div>
      <div className="main-container">
        <Nav color={"skills"} />
        <main className="info-container">
          <p className="skills-title"> All ABOUT MY SKILLS</p>
          <div className="text-skills">
            I consider myself a very curious person who finds it easy to learn,
            and I always seek to optimize my way of working. I am very committed
            to the projects in which I get involved and I seek to improve myself
            day by day as a person and developer.
          </div>
          <div className="skills-container">
            <ul className="skills-column">
              <h3>Main Skills</h3>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
            <ul className="skills-column">
              <h3>Other skills</h3>
              <li>NodeJs</li>
              <li>Express</li>
              <li>Socket io</li>
              <li>MongoDB</li>
            </ul>
            <ul className="skills-column">
              <h3>Languages</h3>
              <li>Spanish - Native</li>
              <li>English - Advanced</li>
            </ul>
          </div>
          <p className="text-skills">
            I learned all the knowledge by searching for courses on the web and
            working on projects. Initially I started learning the basics of HTML
            and CSS and then delve into Javascript. The next step was to choose
            a framework or library for specialize and chose React because I can
            organize my projects to through reusable modules and components.
          </p>
          <p className="skills-title"> TOWARDS THE FUTURE</p>
          <p className="text-skills">
            I am interested in learning typeScript, React Native, Redux, NextJs,
            DB SQL and NoSQL.
          </p>
        </main>
      </div>
    </div>
  );
}

export default About;
