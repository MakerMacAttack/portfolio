import React from "react";
import "./Footer.css";
// import header from '../../../../public/assets/gi'

function Footer(props) {
  return (
    <footer>
      <div id="footbox">
        <p className="foot-text">Tech Media Management &trade;</p>
        <p className="foot-text">2020 &copy;</p>
        <div>
          <a
            href="https://github.com/MakerMacAttack/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="The GitHub Logo"
              src={"../assets/GitHubIcon.png"}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mac-may/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="The LinkedIn Logo"
              src={"../assets/LinkedInIcon.png"}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
