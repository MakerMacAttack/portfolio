import React from "react";
import Job from "../../components/Job/Job";
import JobList from "../../services/JobList";
import "./Experience.css";

export default function Experience(props) {
  return (
    <div>
      <h1>Occupation Hazards</h1>
      {JobList.map((job, idx) => (
        <Job key={idx} job={job} />
      ))}
    </div>
  );
}
