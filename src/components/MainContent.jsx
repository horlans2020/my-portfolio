import React from "react";
import { IMAGES } from "../constants/Const";
import { STACKS } from "../constants/StackData";
import "../styles/MainContent.css";
import Projects from "./Projects";
import Skills from "./Skills";

const MainContent = () => {
  return (
    <div className="home-main">
      <div className="about-div">
        <h2>About me</h2>

        <div className="about-details">
          <div className="about-image">
            <img src={IMAGES.me} />
          </div>
          <div className="about-text">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              ex sequi architecto modi soluta molestias aut dolore aliquid
              provident itaque commodi doloremque, excepturi amet. Sequi
              aspernatur eligendi iure culpa quisquam! aspernatur eligendi iure
              culpa quisquam!
            </span>
          </div>
        </div>
      </div>
      <div className="stack-div">
        <h2>My Stacks</h2>
        <div className="stack-list">
          {STACKS.map((stack) => {
            return <Skills skill={stack.stack} image={stack.image} />;
          })}
        </div>
        ;
      </div>
      <div className="projects-div">
        <div>
          <h2>Projects</h2>
        </div>
        <div className="project-list">
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
