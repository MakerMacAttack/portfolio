import React from "react";
import { Link } from "react-router-dom";
import NavButtons from "../../../services/NavButtons";
import NavButton from "../../NavButton/NavButton";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <header>
      <div id="navbox">
        {NavButtons.map((button, idx) => (
          <NavButton key={idx} display={button.display} link={button.link} />
        ))}
        <Link to="/contact" className="head-link">
          Contact Me
        </Link>
      </div>
    </header>
  );
}
