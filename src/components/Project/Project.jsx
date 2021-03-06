import React from "react";
import ReactDOM from "react-dom";
import useModal from "../../services/useModal";
import "./Project.css";

export default function Project({ project }) {
  const { isShowing, toggle } = useModal();
  const github = `https://github.com/MakerMacAttack/${project.github}`;
  return (
    <div className="project">
      <a href={project.link} target="_blank" rel="noreferrer">
        <h3 className="sub-title">{project.title}</h3>
      </a>
      <a href={github} target="_blank" rel="noreferrer">
        <p className="body-text">Github repo</p>
      </a>
      <button onClick={toggle}>What I gained from this experience</button>
      {isShowing
        ? ReactDOM.createPortal(
            <React.Fragment>
              <div className="modal-overlay" />
              <div
                className="modal-wrapper"
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
              >
                <div className="modal">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="modal-close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={toggle}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <p>{project.lessons}</p>
                </div>
              </div>
            </React.Fragment>,
            document.body
          )
        : null}
    </div>
  );
}
