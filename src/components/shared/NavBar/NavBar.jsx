import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavButtons from "../../../services/NavButtons";
import MobileNav from "../../MobileNav/MobileNav";
import NavButton from "../../NavButton/NavButton";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div
        id="mobile-nav"
        className={open ? "mobile-nav-open" : "mobile-nav-closed"}
      >
        {NavButtons.map((button, idx) => (
          <MobileNav key={idx} display={button.display} link={button.link} />
        ))}
      </div>
      <div id="navbox">
        <div id="burger" onClick={() => setOpen((prevState) => !prevState)}>
          <div className="burger-line" id={open ? "backslash" : "top"} />
          <div className="burger-line" id={open ? "gone" : "middle"} />
          <div className="burger-line" id={open ? "forwardslash" : "bottom"} />
        </div>
        {NavButtons.map((button, idx) => (
          <NavButton key={idx} display={button.display} link={button.link} />
        ))}
        <Link to="/contact" id="contact">
          Contact Me
        </Link>
      </div>
    </header>
  );
}
