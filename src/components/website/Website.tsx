import React from "react";
import "./website.less";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../navigation/navbar";
import { Footer } from "../footer/footer";
import { AnimatedRoutes } from "../AnimatedRoutes";
import { ScrollRouter } from "../../hooks/hooks";

export const Website = () => {
  return (
    <BrowserRouter basename={"/"}>
      <ScrollRouter />
      <div className="website-container">
        <Navbar />
        <div className={"website-content"}>
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
