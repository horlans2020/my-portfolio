import React from "react";
import "../styles/Hero.css";
import { IMAGES } from "../constants/Const";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-left">
        <h2>Hi there,</h2>
        <h1 className="hero-name">I'm Olarewaju Samuel</h1>
        <span>Frontend and Backend Developer</span>
      </div>
      <div className="hero-right">
        <img src={IMAGES.HeroPng} alt="" className="hero-image" />
        {/* <p>hero image display</p> */}
      </div>
    </div>
  );
};

export default Hero;
