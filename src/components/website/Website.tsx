import React from "react";
import "./Website.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "../navigation/navbar";
import { Home } from "../home/home";
import { About } from "../about/about";
import { Footer } from "../footer/footer";

export const Website = () => {
  return (
    <BrowserRouter basename={"/"}>
      <div className="website-container">
        <div className="styling-block"> </div>
        <Navbar />
        <div className={"website-content"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
