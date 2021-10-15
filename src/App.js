import "./App.css";
import React from "react";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

setInterval(() => {
  console.log(window.screen.width + " " + window.screen.height);
}, 1500);
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
