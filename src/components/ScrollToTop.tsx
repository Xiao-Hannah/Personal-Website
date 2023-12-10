import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import upArrow from "./../assets/images/upArrow.png";
import { useWindowDimensions } from "../hooks/hooks";

const scrollToTop = () => {
  scroll.scrollToTop();
};

export const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { height } = useWindowDimensions();
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button className="scrollToTop" onClick={scrollToTop}>
      <img
        style={{ opacity: scrollPosition < height ? "0" : "1" }}
        src={upArrow}
        alt="up arrow"
        width={"20px"}
      />
    </button>
  );
};
