import React from "react";
import "./about.css";
import aboutImage from "./../../assets/images/about.jpg";

const subtitleLinks: SubtitleLinks[] = [
  {
    displayName: "hx2313@barnard.edu",
    link: "mailto:hx2313@barnard.edu?Subject=Hello",
  },
  {
    displayName: "Instagram",
    link: "https://instagram.com/hanx0628?igshid=MTk0NTkyODZkYg==",
  },
  { displayName: "Résumé", link: "http://google.com" },
];

interface SubtitleLinks {
  displayName: string;
  link: string;
}
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
    </div>
  );
};
