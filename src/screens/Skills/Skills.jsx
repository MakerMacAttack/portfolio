import React from "react";
import "./Skills.css";

export default function Skills(props) {
  // {
  //   <div>
  // }
  // {
  //   <h1 class-name="screen-title">My many and varied talents</h1>
  // }
  // {
  //   </div>
  // }
  return (
    <div id="skillz">
      <div>
        <h3 className="sub-title">Languages</h3>
        <ul className="body-text">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>Python</li>
        </ul>
      </div>
      <div>
        <h3 className="sub-title">Libraries</h3>
        <ul className="body-text">
          <li>React</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <div>
        <h3 className="sub-title">Frameworks</h3>
        <ul className="body-text">
          <li>Express</li>
          <li>Rails</li>
        </ul>
      </div>
      <div>
        <h3 className="sub-title">Databases</h3>
        <ul className="body-text">
          <li>MongoDB</li>
          <li>Postgres</li>
        </ul>
      </div>
    </div>
  );
}
