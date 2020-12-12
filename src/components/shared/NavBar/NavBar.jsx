import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <header>
      <div id="navbox">
        <Link to="/" className="head-link">
          Home
        </Link>
        <Link to="/contact" className="head-link">
          Contact Me
        </Link>
        <Link to="/skills" className="head-link">
          Skills
        </Link>
        <Link to="/experience" className="head-link">
          Professional Experience
        </Link>
        <Link to="/education" className="head-link">
          Education
        </Link>
        <Link to="/projects" className="head-link">
          My Projects
        </Link>
        <Link to="/compsci" className="head-link">
          CS Expertise
        </Link>
      </div>
    </header>
  );
}
