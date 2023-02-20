import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About(props) {
  return (
    <div id="about">
      <h1 class-name="screen-title">Mac May</h1>
      <div id="about-box">
        {/* come up with something for MediGO and something for Cogent */}
        {/* old text - In first Congress and then
          Drexel University, I proved that grand ideas are best constructed with
          deliberate care. While at Drexel, I took advantage of the opportunity
          to pursue graduate courses in programming and computer science, and
          I'm ready now to start the next phase of my career. */}
        <p className="body-text" id="intro">
          I'm Mac. Nice to meet you. I am looking for my next opportunity in the
          field of software engineering. My philosophy is that thoughtful planning leads to
          reliable results. I've found that this solid foundation provides the
          groundwork for my creative innovation, and has served me well as a
          developer. My first programming job was a front-end developer at MediGO,
          working on an app to improve the logistics of organ donation. Apart from updating,
          improving, and adding to the app, I also handled deployment and trained new devs.
          At Cogent, I'm working full-stack on in-house apps where my end-users are my co-workers,
          and I'm expanding my knowledge to the back-end. My ideal next
          opportunity involves creating elegant, robust code in an environment
          which understands the value of authenticity.
        </p>
        <div>
          <img id="profile" alt="Mac" src={"../assets/MacProfile.jpg"} />
          <h3 className="sub-title">
            Front End Engineer | Full-Stack Developer
          </h3>
        </div>
      </div>
      <h3 className="sub-title">My Journey</h3>
      <p className="body-text bio">
        Growing up, my two passions were videography and computer programming. 
        After a career in video, I decided it was time to{" "}
        <Link to="/experience" className="about-link">
          pursue a new life as a developer.
        </Link>{" "}
        I took graduate courses, went to{" "}
        <Link to="/education" className="about-link">
          an intense coding academy
        </Link>
        , and became a professional software engineer.
      </p>
      <p className="body-text bio">
        Now, I'm looking for the next opportunity to grow my{" "}
        <Link to="/skills" className="about-link">
          skills
        </Link>{" "}
        in the field, as the world around us is shaped
        more and more every day by ubiquitous code.
      </p>
      <p className="body-text bio">
        For examples of how I combine my two passions, check out the{" "}
        <Link to="/compsci" className="about-link">
          CS section
        </Link>
        .
      </p>
      <p className="body-text bio">
        <a
          href={"../assets/MacMayResume.pdf"}
          target="_blank"
          rel="noreferrer"
          className="about-link"
        >
          Click here
        </a>{" "}
        to view or download a copy of my resume.
      </p>
    </div>
  );
}
