import React from "react";
import { Link } from "react-router-dom";

function Nav({ color }) {
  console.log(color);
  return (
    <nav className="nav-container">
      <ul className="list">
        <Link className="link-tag" to="/">
          <li
            style={color === "about" ? { color: "rgba(80,180,255)" } : null}
            className="list-element"
          >
            About
          </li>
        </Link>
        <Link className="link-tag" to="/skills">
          <li
            style={color === "skills" ? { color: "rgb(255, 140, 85)" } : null}
            className="list-element"
          >
            Skills
          </li>
        </Link>
        <Link className="link-tag" to="/projects">
          <li
            style={color === "projects" ? { color: "rgba(80,180,255)" } : null}
            className="list-element"
          >
            Projects
          </li>
        </Link>
        <Link className="link-tag" to="/contact">
          <li
            style={color === "contact" ? { color: "rgba(80,180,255)" } : null}
            className="list-element"
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
