import React from "react";
import "./Education.css";

export default function Education(props) {
  return (
    <div>
      <h1 class-name="screen-title">Book Learnin'</h1>
      <h3 className="sub-title">General Assembly (2020)</h3>
      <p className="body-text">
        Software Engineering Immersive. Completion certificate.
      </p>
      <h3 className="sub-title">Drexel University (2017-2020)</h3>
      <p className="body-text">
        Post-baccallaurate certificate in Computer Science.
      </p>
      <p className="body-text">
        Graduate courses include: Dependable Software Systems, Intro to AI,
        Programming Languages, Computer Networks.
      </p>
      <h3 className="sub-title">Quinnipiac University (2000-2005)</h3>
      <p className="body-text">
        BA in Mass Communications, minor in International Studies.
      </p>
    </div>
  );
}
