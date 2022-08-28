import React from "react";
import "../styles/Skills.css";

const Skills = (props) => {
  return (
    <div className="stack-card">
      <img src={props.image} alt="" />
      <div>{props.skill}</div>
    </div>
  );
};

export default Skills;
