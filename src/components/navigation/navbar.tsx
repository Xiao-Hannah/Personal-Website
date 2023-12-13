import React, { useEffect, useState } from "react";
import "./navbar.less";
import { NavLink, useLocation } from "react-router-dom";
import { useIsMobile } from "../../hooks/hooks";
import constants from "../../constants";

const pages: Record<string, string> = {
  "/fridgeFriend": constants.fridgeFriendColor,
};
interface NavbarItem {
  displayName: string;
  pathName: string;
}

const navbarItems: NavbarItem[] = [
  { displayName: "For Fun", pathName: "/for%20fun" },
  { displayName: "Contact", pathName: "/contact" },
  { displayName: "About", pathName: "/about" },
  { displayName: "Project", pathName: "/" },
];
export interface NavbarProps {
  selectedItem?: number;
}
export const Navbar = ({ selectedItem }: NavbarProps) => {
  const location = useLocation();
  const [itemSelected, setItemSelected] = useState<number>(selectedItem ?? -1);
  const [itemHovered, setItemHovered] = useState<number>(-1);
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const pathName = location.pathname;
    navbarItems.forEach((item, index) => {
      if (item.pathName === pathName) {
        setItemSelected(index);
      }
    });
  }, [location]);
  return (
    <div className="navbar-container">
      {!isMobile ? (
        navbarItems.map((navbarItem, index) => {
          return (
            <NavLink
              to={
                index !== 3 ? navbarItems[index].displayName.toLowerCase() : ""
              }
              key={navbarItem.displayName}
              className="navbar-item-anchor"
              onMouseOver={() => {
                setItemHovered(index);
              }}
              onMouseLeave={() => {
                setItemHovered(-1);
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
                  itemSelected === index
                    ? "navbar-item selected"
                    : "navbar-item"
                }
              >
                {navbarItem.displayName}
              </div>
            </NavLink>
          );
        })
      ) : (
        <>
          <div
            className={"navbar-hamburger-container"}
            onClick={toggleMenu}
            // ref={buttonRef}
          >
            <div className={"navbar-hamburger-inner"}>
              <div
                className={
                  menuOpen
                    ? "navbar-hamburger-icon"
                    : "navbar-hamburger-icon is-open"
                }
              />
            </div>
          </div>
          <div
            className={menuOpen ? "navbar-sidebar" : "navbar-sidebar is-open"}
            style={{
              backgroundColor: pages[location.pathname] ?? constants.baseColor,
            }}
          >
            {navbarItems.map((navbarItem, index) => {
              return (
                <NavLink
                  to={
                    index !== 3
                      ? navbarItems[index].displayName.toLowerCase()
                      : ""
                  }
                  key={navbarItem.displayName}
                  className="navbar-item-anchor"
                  onMouseOver={() => {
                    setItemHovered(index);
                  }}
                  onMouseLeave={() => {
                    setItemHovered(-1);
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
                      itemSelected === index
                        ? "navbar-item selected"
                        : "navbar-item"
                    }
                  >
                    {navbarItem.displayName}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
