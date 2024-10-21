import React from "react";
import { motion } from "framer-motion";
import avocado from "./../../assets/images/home/avocado.png";
import avocadoBg from "./../../assets/images/home/avocado-bg.png";
import flowerBg from "./../../assets/images/home/flower-bg.png";
import flower from "./../../assets/images/home/flower.png";
import { Link, NavLink } from "react-router-dom";
import { MovingImage } from "../movingImage/MovingImage";
import { useWindowDimensions } from "../../hooks/hooks";

interface Projects {
  image: string;
  tags: string[];
  bgImage?: string;
  imageWidth?: string;
  title: string;
  titleFont?: string;
  titleColor?: string;
  titleSize?: string;
  letterSpacing?: string;
  description: string[];
  link: string;
  value: string;
}

const projects: Projects[] = [
  {
    title: "Bloomè",
    description: [
      "Discover Bloomè, where elegance blooms digitally. Immerse in an artful floral experience with Augmented Reality previews and tailored bouquet customization. Here, choosing flowers is not just shopping—it's a celebration of style and beauty.",
    ],
    image: flower,
    bgImage: flowerBg,
    tags: ["Mobile App", "Figma"],
    imageWidth: "80%",
    link: "/bloome",
    value: "bloome",
    titleFont: "Georgia",
    titleColor: "#E3B8B5",
  },
  {
    title: "Fridge Friend",
    description: [
      "Welcome to FridgeFriend – revolutionizing your kitchen experience! With our in-fridge cameras, automated recipe generator, and intelligent shopping assistant, say goodbye to food waste and hello to efficient grocery planning.",
    ],
    image: avocado,
    bgImage: avocadoBg,
    tags: ["UI/UX Design", "Figma", "CAD"],
    link: "/fridgeFriend",
    value: "fridgeFriend",
    titleFont: "Just Another Hand",
    titleColor: "#05441C",
    titleSize: "50px",
    letterSpacing: "3px",
  },
];

export const Home = () => {
  const { width } = useWindowDimensions();
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
        <h2>Hi there!</h2>
        <h2>
          I'm navigating the exciting worlds of Anthropology and Economics at
          Barnard College, with a heart set on reinventing how people connect
          through technology
        </h2>
      </motion.div>
      <div className="home-projects-container">
        {projects.map((project, index) => {
          const backwards = index % 2 === 0;
          return (
            <div
              className={`home-project-container ${
                backwards ? "backwards" : ""
              }`}
              key={index}
              style={
                width <= 600
                  ? { flexDirection: "column" }
                  : index % 2 == 1
                  ? { flexDirection: "row-reverse" }
                  : { flexDirection: "row" }
              }
            >
              <MovingImage
                mainImage={project.image}
                backgroundImage={project.bgImage}
                width={"25%"}
                imageWidth={project.imageWidth}
                link={project.link}
              />
              <div className="home-project-text-container">
                <h2
                  style={{
                    fontFamily: project.titleFont,
                    color: project.titleColor,
                    fontSize: project.titleSize,
                    letterSpacing: project.letterSpacing,
                  }}
                >
                  {project.title}
                </h2>
                {project.description.map((description, descriptionIndex) => {
                  return (
                    <h3 key={descriptionIndex} style={{ fontSize: "24px" }}>
                      {description}
                    </h3>
                  );
                })}
                <div className="home-project-tag-container">
                  {project.tags.map((tag, tagIndex) => {
                    return (
                      <div className="home-project-tag" key={tagIndex}>
                        <p> {tag}</p>
                      </div>
                    );
                  })}
                </div>
                <NavLink
                  to={project.link}
                  className={`home-project-link ${project.value}`}
                >
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
