import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../../screens/About/About";
import CompSci from "../../screens/CompSci/CompSci";
import Contact from "../../screens/Contact/Contact";
import Education from "../../screens/Education/Education";
import Experience from "../../screens/Experience/Experience";
import Projects from "../../screens/Projects/Projects";
import Skills from "../../screens/Skills/Skills";
import "./MainContainer.css";

export default function MainContainer(props) {
  return (
    <main>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/compsci">
          <CompSci />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </main>
  );
}
