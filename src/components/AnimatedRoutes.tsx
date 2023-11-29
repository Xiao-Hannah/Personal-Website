import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "./about/about";
import { Home } from "./home/home";
import { FourOhFour } from "./website/404";
import { AnimatePresence } from "framer-motion";
import { StylingBlock } from "./StylingBlock";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <StylingBlock locationPath={location.pathname}/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </AnimatePresence>
  );
};
