import React from "react";
import "./Job.css";

export default function Job({ job }) {
  const { company, title, dates, description } = job;
  return (
    <div className="job">
      <p className="company">{`${company}, ${dates}`}</p>
      <p className="job-title">{title}</p>
      <p className="body-text">{description}</p>
    </div>
  );
}
