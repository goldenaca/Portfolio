import React from "react";
import "./projects.css";
import projectsImage from "../../images/projects.jfif";
import Nav from "../../components/Nav";
import syncImage from "../../images/sync-video.jpg";
import nidiaImage from "../../images/nidia-web.png";
import marsProjectImage from "../../images/Mars-project.png";

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
          <div className="project-cards-container">
            <div className="blur-layer">
              <div className="card">
                <img className="card-image" src={syncImage} alt=""></img>
                <ul className="card-list-container">
                  <li>
                    ● This project was developed to sync YT videos for multiple
                    users.
                  </li>
                  <li> ● Can handle multiple rooms.</li>
                  <li>
                    ● Use Express to serve the static files from the React
                    build.
                  </li>
                  <li>
                    ● The connection between the users and the server is made
                    with sockets.
                  </li>
                  <li>
                    ● You can chat with the other users in the room on real
                    time. room.
                  </li>
                  <li>
                    ● You can search any Youtube video through the google api.
                  </li>
                  <li>
                    ● Used technology: HTML, CSS, Js, ReactJs, NodeJs, Express,
                    ScoketIo
                  </li>
                </ul>
                <div className="visit-btn-container">
                  <a
                    className="visit-btn"
                    href="https://sync-yt-video.herokuapp.com/"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
            <div className="blur-layer">
              <div className="card">
                <img className="card-image" src={nidiaImage} alt=""></img>
                <ul className="card-list-container">
                  <li>
                    ● This project was developed to advertise two cabins in
                    Bariloche.
                  </li>
                  <li> ● Use React Router to display different screens.</li>
                  <li> ● Used technology: HTML, CSS, Js, ReactJs.</li>
                </ul>
                <div className="visit-btn-container">
                  <a
                    className="visit-btn"
                    href="https://nidia-website.vercel.app/"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
            <div className="blur-layer">
              <div className="card">
                <img className="card-image" src={marsProjectImage} alt=""></img>
                <ul className="card-list-container">
                  <li>
                    ● This project was developed to display photos of Mars using
                    Nasa api.
                  </li>
                  <li>● You can filter by: Earth/Sol Date, Rover, Camera.</li>
                  <li>● You can save the filter settings on local storage. </li>
                  <li>● Make use of infinite scroll. </li>
                  <li>● Always shows photos from current date. </li>
                  <li>
                    ● Used technology: HTML, CSS, Js, ReactJs, Tailwindcss.
                  </li>
                </ul>
                <div className="visit-btn-container">
                  <a
                    className="visit-btn"
                    href="https://mars-seeker.vercel.app/"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
