import React from "react";
import "./Website.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "../navigation/navbar";
import { Home } from "../home/home";

export const Website = () => {
  return (
    <div className="website-container">
      <Navbar />
      <div className={"website-content"}>
        <BrowserRouter basename={"/"}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
