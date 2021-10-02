import React from "react";
import { Link, useHistory } from "react-router-dom";

function Nav() {
  const History = useHistory();
  const location = History.location.pathname;
  return (
    <nav className="nav-container">
      <ul className="list">
        <Link className="link-tag" to="/">
          <li
            style={
              location === "/"
                ? {
                    color: "rgba(80,180,255)",
                  }
                : null
            }
            className={
              location === "/" ? "list-element" : "list-element about-hover"
            }
          >
            About
          </li>
        </Link>
        <Link className="link-tag" to="/skills">
          <li
            style={
              location === "/skills" ? { color: "rgb(255, 140, 85)" } : null
            }
            className={
              location === "/skills"
                ? "list-element"
                : "list-element skills-hover"
            }
          >
            Skills
          </li>
        </Link>
        <Link className="link-tag" to="/projects">
          <li
            style={
              location === "/projects" ? { color: "rgb(139, 97, 255)" } : null
            }
            className={
              location === "/projects"
                ? "list-element"
                : "list-element projects-hover"
            }
          >
            Projects
          </li>
        </Link>
        <Link className="link-tag" to="/contact">
          <li
            style={
              location === "/contact" ? { color: "rgb(255, 59, 85)" } : null
            }
            className={
              location === "/contact"
                ? "list-element"
                : "list-element contact-hover"
            }
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
