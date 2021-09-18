import "./App.css";
import React from "react";
import aboutImage from "./images/About.jpg";
/* import skillsImage from "./images/Skills.jpg";
import projectsImage from "./images/Projects.jpg";
import vontactImage from "./images/Contact.jpg"; */

function App() {
  const [backgroundImage, setBackgroundImage] = React.useState(aboutImage);
  const backgroundHanlder = () => {
    return { background: `url(${backgroundImage})` };
  };

  return (
    <div className="app-container" style={backgroundHanlder()}>
      <p> el colo colo </p>
    </div>
  );
}

export default App;
