import React from "react";
import "./Website.less";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { Navbar } from "../navigation/navbar";
import { Home } from "../home/home";
import { About } from "../about/about";
import { Footer } from "../footer/footer";
import { FourOhFour } from "./404";

export const Website = () => {
  return (
    <BrowserRouter basename={"/"}>
      <div className="website-container">
        <StylingBlock />
        <Navbar />
        <div className={"website-content"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<FourOhFour />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const pages = ["/about", "/"];
const StylingBlock = () => {
  const location = useLocation();
  return (
    <>
      {pages.includes(location.pathname) ? (
        <div className="styling-block"> </div>
      ) : null}
    </>
  );
};
