import React from "react";
import aboutImage from "./../../assets/images/about/about.jpg";
import aboutContent1 from "./../../assets/images/about/about1.jpg";
import aboutContent2 from "./../../assets/images/about/about2.jpg";
import { LinkItem } from "../../models/LinkItem";
import resume from "./../../assets/files/resume.pdf";
import { motion } from "framer-motion";

const subtitleLinks: LinkItem[] = [
  {
    displayName: "hx2313@uw.edu",
    link: "mailto:hx2313@uw.edu?Subject=Hello",
  },
  {
    displayName: "Instagram",
    link: "https://instagram.com/hanx0628?igshid=MTk0NTkyODZkYg==",
  },
  { displayName: "Résumé", link: resume },
];

export const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-title"
        initial={{ right: "500px" }}
        animate={{ left: "0px" }}
      >
        <h1> Oh? Hello There! </h1>
        <div className="about-subtitle">
          {subtitleLinks.map((subtitleLink, index) => {
            return (
              <h2 key={index}>
                <a href={subtitleLink.link} target="_blank" rel="noopener">
                  {subtitleLink.displayName}
                </a>
              </h2>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        className="about-description"
        initial={{ transform: "translateX(2000px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ delay: 0.5 }}
      >
        <h3>
          Creation is at the heart of my everyday life. To me, creativity is the
          spark behind everything I do. As a student, you'll often find me in
          the prototyping lab, surrounded by tools, crafting electronic gadgets
          and fabricating designs. In the winter, you can probably recognize me
          by the faint scent of laser-cut plywood trailing behind me. At home,
          my favorite way to unwind is watching films with my cat, Willow. I
          also love experimenting with special-effects makeup and baking—though
          my attempts don't always turn out as planned, the fun is in the
          process!
        </h3>
      </motion.div>
      <motion.div
        className="about-image-container"
        initial={{ transform: "translateX(2000px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ delay: 0.5 }}
      >
        <img src={aboutImage} alt="about main image" className="about-image" />
      </motion.div>
      <div className="about-content-container">
        <img
          src={aboutContent1}
          alt="about content image 1"
          className="about-content-image"
        />

        <div className="about-content-text-container">
          <h3 className="about-content-text-title">MY JOURNEY</h3>
          <div className="about-content-text">
            <p>
              My path has taken me through consulting, market research, and
              product management, giving me a broad skillset and igniting my
              passion for product and data. I thrive in fast-paced environments
              where I'm constantly learning and problem-solving. What excites me
              most is creating meaningful products and turning user research
              into actionable insights that improve people's lives.
            </p>
          </div>
        </div>
        <img
          src={aboutContent2}
          alt="about content image 1"
          className="about-content-image"
        />

        <div className="about-content-text-container">
          <h3 className="about-content-text-title">A PASSION FOR PEOPLE</h3>
          <div className="about-content-text">
            <p>
              My background in anthropology fuels my deep curiosity about human
              connections and narratives. I fell in love with ethnography during
              my undergraduate years because it reveals the intricate social
              networks and personal stories that shape people's lives. I'm
              fascinated by the everyday joys and struggles we all face, as well
              as the ways power, culture, and social structures shape our
              experiences. Exploring these themes keeps me grounded and inspires
              the work I do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
