import React from "react";
import "./Skills.css";

export default function Skills(props) {
  return (
    <div>
      <h1>My many and varied talents</h1>
      <div id="skillz">
        <h3>Languages</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>Python</li>
        </ul>
        <h3>Libraries</h3>
        <ul>
          <li>React</li>
          <li>Mongoose</li>
        </ul>
        <h3>Frameworks</h3>
        <ul>
          <li>Express</li>
          <li>Rails</li>
        </ul>
        <h3>Databases</h3>
        <ul>
          <li>MongoDB</li>
          <li>Postgres</li>
        </ul>
      </div>
    </div>
  );
}
