import React from "react";
import { StylingBlock } from "../StylingBlock";
import "./home.less";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ right: "500px" }}
      animate={{ left: "0px" }}
    >
      <div className="home-title">
        <h1> Hannah Xiao </h1>
      </div>
      <div className="home-welcome">
        <h2>Hello! Welcome</h2>
        <h2>
          I'm Hannah Xiao, an economics and anthropology student at Barnard
          College, weaving together the realms of academia and UX design. I'm
          currently in love with Eric Wu :D
        </h2>
      </div>
    </motion.div>
  );
};
