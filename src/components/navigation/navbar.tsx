import React, { useState } from "react";
import "./navbar.less";
import { NavLink } from "react-router-dom";

const navbarItems = ["For Fun", "Contact", "About", "Project"];
export interface NavbarProps {
  selectedItem?: number;
}
export const Navbar = ({ selectedItem }: NavbarProps) => {
  const [itemSelected, setItemSelected] = useState<number>(selectedItem ?? -1);
  const [itemHovered, setItemHovered] = useState<number>(-1);
  return (
    <div className="navbar-container">
      {navbarItems.map((navbarItem, index) => {
        return (
          <NavLink
            to={index !== 3 ? navbarItems[index].toLowerCase() : ""}
            key={navbarItem}
            className="navbar-item-anchor"
            onMouseOver={() => {
              setItemHovered(index);
            }}
            onMouseLeave={() => {
              setItemHovered(-1);
            }}
            onClick={() => {
              setItemSelected(index);
            }}
          >
            <div
              className={
                index === itemHovered && index !== itemSelected
                  ? "navbar-item-hover isHovered"
                  : "navbar-item-hover"
              }
            />
            <div
              className={
                itemSelected === index ? "navbar-item selected" : "navbar-item"
              }
            >
              {navbarItem}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
