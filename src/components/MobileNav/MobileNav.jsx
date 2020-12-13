import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

export default function MobileNav({ link, display, setOpen }) {
  return (
    <Link to={link} className="mobile-button" onClick={() => setOpen(false)}>
      {display}
    </Link>
  );
}
