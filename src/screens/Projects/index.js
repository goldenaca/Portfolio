import React from "react";
import "./projects.css";
import projectsImage from "../../images/projects.jfif";
import Nav from "../../components/Nav";
import syncImage from "../../images/sync-video.jpg";
import nidiaImage from "../../images/nidia-web.png";
import comingSoonImage from "../../images/coming-soon.jpg";

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
        <Nav />
        <main className="info-container">
          <div className="skills-title-container">
            <p>MOST RELEVANT PROJECTS</p>
            <a href="https://github.com/goldenaca?tab=repositories">
              <i className="fab fa-github-square git-icon"></i>
            </a>
          </div>
          <div className="projects-text">
            Here you can find some of my most relevant projects, but if you want
            to know more, you can enter my github (
            <a
              className="git"
              href="https://github.com/goldenaca?tab=repositories"
            >
              https://github.com/goldenaca?tab=repositories
            </a>
            ). Inside you will find my repository with all my projects.
          </div>
          <div className="projects-cards-container">
            <div className="blur-layer-sync">
              <a href="https://sync-yt-video.herokuapp.com/" className="card">
                <img className="card-image" src={syncImage} alt=""></img>
                <p className="card-text">
                  I made this application to be able to watch videos
                  synchronized with another person. The application is developed
                  in react and for the server I use Express and Socket io to
                  broadcast the events of the player on every room. To deploy
                  the app I use Express to serve the statics file from the React
                  build.
                </p>
              </a>
            </div>
            <div className="blur-layer-nidia">
              <a href="https://nidia-website.vercel.app/" className="card">
                <img className="card-image" src={nidiaImage} alt=""></img>
                <p className="card-text">
                  In this Project, a client who manages cabins in Bariloche
                  asked me to develop a website where they can advertise the
                  cabins. For this website I used react which facilitated my
                  work allowing me to reuse components in the different screens.
                  The client asked me if the host could be free at first, so I
                  decided to do the Deploy in Vercel
                </p>
              </a>
            </div>
            <div className="blur-layer-axie">
              <a href="/projects" className="card">
                <img className="card-image" src={comingSoonImage} alt=""></img>
                <p className="card-text"></p>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
