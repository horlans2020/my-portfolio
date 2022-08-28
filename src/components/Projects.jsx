import React from "react";
import "../styles/Projects.css";

const Projects = (props) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <p>Image div</p>
      </div>
      <div className="project-desc">
        <h4>project title</h4>
        <span>Project description</span>
      </div>
    </div>
  );
};

export default Projects;
