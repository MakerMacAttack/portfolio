import React from "react";
import "./Footer.css";
// import header from '../../../../public/assets/gi'

function Footer(props) {
  return (
    <footer>
      <p>Tech Media Management &trade;</p>
      <a
        href="https://github.com/MakerMacAttack/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          id="github-logo"
          alt="The GitHub Logo"
          src="/../../../../public/assets/github.png"
        />
      </a>
    </footer>
  );
}

export default Footer;
