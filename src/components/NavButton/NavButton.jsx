import React from "react";
import { Link } from "react-router-dom";
import "./NavButton.css";

export default function NavButton({ display, link }) {
  return (
    <Link to={link} className="head-link">
      {display}
    </Link>
  );
}
