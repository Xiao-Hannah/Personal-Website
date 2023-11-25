import React from "react";
import "./about.less";
import aboutImage from "./../../assets/images/about.jpg";
import aboutContent1 from "./../../assets/images/about1.jpg";
import aboutContent2 from "./../../assets/images/about2.jpg";
import { LinkItem } from "../../models/LinkItem";
import resume from "./../../assets/files/resume.pdf";

const subtitleLinks: LinkItem[] = [
  {
    displayName: "hx2313@barnard.edu",
    link: "mailto:hx2313@barnard.edu?Subject=Hello",
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
      <div className="about-title">
        <h1> Oh? Bello There! </h1>
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
      </div>
      <div className="about-description">
        <h3>
          Design, for me, is like a boat navigating the vast, boudless sea of
          life. Life itself is a journey of discovery, experience, and creation,
          where we forge connections witht he world around us. These
          experiences, in turn shape or inner selves
        </h3>
      </div>
      <div className="about-image-container">
        <img src={aboutImage} alt="about main image" className="about-image" />
      </div>
      <div className="about-content-container">
        <img
          src={aboutContent1}
          alt="about content image 1"
          className="about-content-image"
        />

        <div className="about-content-text-container">
          <h3 className="about-content-text-title">
            AS AN INTERDISCIPLINARY DESIGNER
          </h3>
          <div className="about-content-text">
            <p>
              My journey has spanned marketing, consulting, and market research,
              equipping me with a diverse skill set. In creating strategies for
              various corporations, I've honed my ability to derive valuable
              insights from user research. I embrace challenges and excel in
              connecting research with practical design solutions. I'm a firm
              believer in a problem-solving approach and collaborative efforts
              to develop successful, human-centric products that resonate with
              users.
            </p>
          </div>
        </div>
        <img
          src={aboutContent2}
          alt="about content image 1"
          className="about-content-image"
        />

        <div className="about-content-text-container">
          <h3 className="about-content-text-title">
            EXPLORING LIVES THROUGH ETHNOGRAPHY
          </h3>
          <div className="about-content-text">
            <p>
              My passion for ethnography is rooted in its ability to weave
              through the intricate social networks and personal narratives of
              people. More than just storytelling, it captures the essence of
              life. Ethnography allows us to see the daily joys and struggles of
              people, as well as the influences of power, culture, ideology, and
              social structures. Ethnography's true strength lies in its focus
              on the individual, providing a magnified view of larger social
              processes and institutional transformations, grounded in the
              detailed study of diverse experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
