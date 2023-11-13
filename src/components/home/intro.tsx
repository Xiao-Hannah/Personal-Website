import React from "react";
import headshot from "./../../assets/images/headshot.png";

export const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-image-container">
        <img
          className="intro-image-headshot"
          src={headshot}
          alt="home background image"
        />
        <div className="intro-image-caption-container">
          <h3 className="intro-image-caption-header"> Hannah Xiao</h3>
          <p className="intro-image-caption-subheader">
            Economics and Anthropology Student at Barnards College
          </p>
        </div>
      </div>
      <div className="intro-text-container">
        <h2 className="intro-text-title"> Bello!</h2>
        <h3>Welcome to my digital space!</h3>
        <p className="intro-text-content">
          I'm Hannah Xiao, an economics and anthropology student at Barnard
          College, weaving together the realms of academia and UX design.
        </p>
        <p className="intro-text-content">
          Join me on this journey as I explore the intersection of diverse
          studies, creating a dynamic showcase on my website. As I set my sights
          on the UX design path, dive into the evolving narrative of my academic
          depth and creative aspirations.
        </p>
        <p className="intro-text-content">
          Let's embark on this virtual expedition together—a convergence of
          economics, anthropology, and the exciting world of UX design!
        </p>
      </div>
    </div>
  );
};
