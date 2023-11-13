import React from "react";
import catBackground from "./../../assets/images/cat.gif";
import "./home.css";
import { Intro } from "./intro";

export const Home = () => {
  return (
    <div className={"home-container"}>
      <div className="toolbar-offset" />
      <img
        className="cat-background"
        src={catBackground}
        alt="home background image"
      />
      <div className="home-header-container">
        <h1 className="home-title"> Hannah Xiao </h1>
        <h2 className="home-subtitle">University Student and UX designer</h2>
      </div>
      <div className="home-content-container">
        <Intro />
      </div>
    </div>
  );
};
