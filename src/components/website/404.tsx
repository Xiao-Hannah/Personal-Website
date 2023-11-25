import React from "react";
import { NavLink } from "react-router-dom";

export const FourOhFour = () => {
  return (
    <div className="fourohfour-container">
      <div className="fourohfour-content">
        <h1> Oops</h1>
        <p> The page you are looking for doesn't exist or has been moved</p>
        <NavLink to={"/"} className={"fourohfour-button-back"}>
          <h3>Go home</h3>
        </NavLink>
      </div>
    </div>
  );
};
