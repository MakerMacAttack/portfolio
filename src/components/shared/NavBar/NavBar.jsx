import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <header>
      <div id="navbox">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Me</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Professional Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">My Projects</Link>
        <Link to="/compsci">CS Expertise</Link>
      </div>
    </header>
  );
}
