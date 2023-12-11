import React from "react";
import "./home.less";
import { motion } from "framer-motion";
import avocado from "./../../assets/images/home/avocado.png";
import { NavLink } from "react-router-dom";

interface Projects {
  image: string;
  title: string;
  description: string[];
  link: string;
}

const projects: Projects[] = [
  {
    title: "Fridge Friend",
    description: [
      "Discover a stress-free kitchen routine with Fridge Friend, the ultimate app for efficient grocery and kitchen essentials management",
      "Fridge Friend's auto-restocking feature ensures a hassle-free experience by tracking fridge usage and automating essential orders",
      "Enjoy seamless integration with local stores, receiving fresh produce and preferred brands at your doorstep. Fridge Friend intelligently adapts to your schedule and events, providing a customized kitchen management solution. Save time and reduce waste with Fridge Friend purchasing only what you need, contributing to a more sustainable kitchen approach",
      "More than an app, Fridge Friend simplifies your routine and enhances your kitchen experience for a streamlined, stress-free lifestyle",
    ],
    image: avocado,
    link: "/fridgeFriend",
  },
];

export const Home = () => {
  return (
    <div className="home-container">
      <motion.div
        className="home-title"
        initial={{ transform: "translateX(-1000px)" }}
        animate={{ transform: "translateX(0px)" }}
      >
        <h1> Hannah Xiao </h1>
      </motion.div>
      <motion.div
        className="home-welcome"
        initial={{ transform: "translateX(2000px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ delay: 0.5 }}
      >
        <h2>Hello! Welcome</h2>
        <h2>
          I'm Hannah Xiao, an economics and anthropology student at Barnard
          College, weaving together the realms of academia and UX design.
        </h2>
      </motion.div>
      <div className="home-projects-container">
        {projects.map((project, index) => {
          return (
            <div className="home-project-container" key={index}>
              <img
                className="home-project-image"
                src={project.image}
                height={"530px"}
              />
              <div className="home-project-text-container">
                <h2> {project.title}</h2>
                {project.description.map((description, descriptionIndex) => {
                  return <h3 key={descriptionIndex}> {description} </h3>;
                })}
                <div />

                <NavLink to={project.link} className={"home-project-link"}>
                  <div className="home-project-link-hover" />
                  {`View ${project.title} now`}
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
