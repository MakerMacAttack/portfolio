import React from "react";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";
import "./About.css";

export default function About(props) {
  return (
    <div id="about">
      <h1 class-name="screen-title">Mac May</h1>
      <div id="about-box">
        <p className="body-text" id="intro">
          I'm Mac. Nice to meet you. I am searching for a new path in life as a
          software engineer. My philosophy is that thoughtful planning leads to
          reliable results. I've found that this solid foundation provides the
          groundwork for my creative innovation, and has served me well in my
          past as a coordinator for diverse teams. In first Congress and then
          Drexel University, I proved that grand ideas are best constructed with
          deliberate care. While at Drexel, I took advantage of the opportunity
          to pursue graduate courses in programming and computer science, and
          I'm ready now to start the next phase of my career. My ideal
          opportunity involves creating elegant, robust code in an environment
          which understand the value of authenticity.
        </p>
        <div>
          <img id="profile" alt="Mac" src={"../assets/MacProfile.jpg"} />
          <h3 className="sub-title">
            Back-End Engineer | Full-Stack Developer
          </h3>
        </div>
      </div>
      <Skills />
      <h3 className="sub-title">My Journey</h3>
      <p className="body-text bio">
        As a youth, I had two passions. Videography, and computer programming. I
        made the tough decision to pursue video first, and{" "}
        <Link to="/experience" className="about-link">
          got a job out of college
        </Link>{" "}
        in live, nationally-broadcast news. I learned and grew a lot in my
        decade in that industry, and when it came time for a new path in life, I
        decided I could experience more by exploring my second passion.
      </p>
      <p className="body-text bio">
        Now, after studying the basics, graduate courses, and{" "}
        <Link to="/education" className="about-link">
          an intense coding academy
        </Link>
        , I'm ready to bring my own unique insights and{" "}
        <Link to="/skills" className="about-link">
          skills
        </Link>{" "}
        to the field of software engineering, as the world around us is shaped
        more and more every day by ubiquitous code.
      </p>
      <p className="body-text bio">
        For an example of how I combine my two passions, check out the{" "}
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
