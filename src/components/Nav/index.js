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
            className={
              location === "/"
                ? "list-element on-about"
                : "list-element about-hover"
            }
          >
            About
          </li>
        </Link>
        <Link className="link-tag" to="/skills">
          <li
            className={
              location === "/skills"
                ? "list-element on-skills"
                : "list-element skills-hover"
            }
          >
            Skills
          </li>
        </Link>
        <Link className="link-tag" to="/projects">
          <li
            className={
              location === "/projects"
                ? "list-element on-projects"
                : "list-element projects-hover"
            }
          >
            Projects
          </li>
        </Link>
        <Link className="link-tag" to="/contact">
          <li
            className={
              location === "/contact"
                ? "list-element on-contact"
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
