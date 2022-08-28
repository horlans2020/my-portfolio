import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="app-bar">
      <div className="logo">
        <h1>SMOD</h1>
      </div>
      <div className="center">
        <ul>
          <li>Portfolio</li>

          <li>Skills</li>

          <li>About me</li>
        </ul>
      </div>
      <div className="call-to-action"> Download resume</div>
    </div>
  );
};

export default Header;
