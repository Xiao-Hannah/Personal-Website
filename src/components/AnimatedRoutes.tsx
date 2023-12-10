import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "./about/about";
import { Home } from "./home/home";
import { FourOhFour } from "./website/404";
import { AnimatePresence } from "framer-motion";
import { StylingBlock } from "./StylingBlock";
import { Contact } from "./contact/contact";
import { Fun } from "./fun/fun";
import { FridgeFriend } from "./projects/fridgeFriend";
import { ScrollToTop } from "./ScrollToTop";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <>
        <StylingBlock locationPath={location.pathname} />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/for fun" element={<Fun />} />
          <Route path="/fridgeFriend" element={<FridgeFriend />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
        <ScrollToTop />
      </>
    </AnimatePresence>
  );
};
