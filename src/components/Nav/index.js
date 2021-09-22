import React from "react";

function Nav({ setBackgroundImage }) {
  const navHandler = (e) => {
    switch (e.target.textContent) {
      case "About":
        return;
      case "Skills":
        return;
      case "Projects":
        return;
      case "Contact":
        return;
      default:
        break;
    }
  };
  return (
    <nav className="nav-container">
      <ul className="list">
        <li onClick={navHandler} className="list-element">
          About
        </li>
        <li onClick={navHandler} className="list-element">
          Skills
        </li>
        <li onClick={navHandler} className="list-element">
          Projects
        </li>
        <li onClick={navHandler} className="list-element">
          Contact
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
