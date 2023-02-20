import React from "react";
import "./Skills.css";

export default function Skills(props) {
  return (
    <div>
      <h1 class-name="screen-title">My many and varied talents</h1>
      <div id="skillz">
        <div class="col">
          <h3 className="sub-title">Languages</h3>
          <ul className="body-text">
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <h3 className="sub-title">Libraries</h3>
          <ul className="body-text">
            <li>React</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div class="col">
          <h3 className="sub-title">Frameworks</h3>
          <ul className="body-text">
            <li>Vue.js</li>
            <li>Laravel</li>
            <li>Express</li>
            <li>Rails</li>
            <li>Angular</li>
          </ul>
          <h3 className="sub-title">Databases</h3>
          <ul className="body-text">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
