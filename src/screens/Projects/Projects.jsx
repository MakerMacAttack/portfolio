import React from "react";
import ProjectList from "../../services/ProjectList";
import Project from "../../components/Project/Project";
import "./Projects.css";

export default function Projects(props) {
  return (
    <div>
      <h1>The Fruits of my Labors</h1>
      {ProjectList.map((project, idx) => (
        <Project project={project} key={idx} />
      ))}
    </div>
  );
}
