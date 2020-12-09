import React from "react";
import "./Footer.css";
// import header from '../../../../public/assets/gi'

function Footer(props) {
  return (
    <div id="footer">
      <div id="footbox">
        <p>Tech Media Management &trade;</p>
        <p>2020 &copy;</p>
        <a
          href="https://github.com/MakerMacAttack/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="github-logo"
            alt="The GitHub Logo"
            src={"../assets/github.png"}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mac-may/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="linkedin-logo"
            alt="The LinkedIn Logo"
            src={"../../../../public/assets/linkedin.png"}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
