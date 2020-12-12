import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About(props) {
  return (
    <div id="about">
      <h1>Mac May</h1>
      <img id="profile" alt="Mac" src={"../assets/MacProfile.jpg"} />
      <h3>Back-End Engineer | Full-Stack Developer</h3>
      <p>
        I'm Mac. Nice to meet you. I believe that careful planning creates
        reliable code which can be easily updated as needs evolve.
      </p>
      <h3>My Journey</h3>
      <p>
        As a youth, I had two passions. Videography, and computer programming. I
        made the tough decision to pursue video first, and{" "}
        <Link to="/experience">got a job out of college</Link> in live,
        nationally-broadcast news. I learned and grew a lot in my decade in that
        industry, and when it came time for a new path in life, I decided to
        pivot and explore my other passion.
      </p>
      <p>
        Now, after studying the basics, graduate courses, and{" "}
        <Link to="/education">an intense coding academy</Link>, I'm ready to
        bring my own unique insights and <Link to="/skills">skills</Link> to the
        field of software engineering, as the world around us is shaped more and
        more every day by ubiquitous code.
      </p>
      <p>
        For an example of how I combine my two passions, check out the{" "}
        <Link to="/compsci">CS section</Link>.
      </p>
      <p>
        <a href={"../assets/MacMayResume.pdf"} target="_blank" rel="noreferrer">
          Click here
        </a>{" "}
        to view or download a copy of my resume.
      </p>
    </div>
  );
}
