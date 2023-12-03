import React from "react";
import "./fun.less";

interface FunItem {
  title: string;
  description: string;
  images: string[];
}

const items: FunItem[] = [
  {
    title: "Archaeological Project",
    description: "I'm not sure what this said",
    images: [],
  },
  {
    title: "Photography",
    description: "Photos are my way to connect with people all around world",
    images: [],
  },
  {
    title: "Travelling",
    description: "Where's my next adventure",
    images: [],
  },
  {
    title: "Trying new things",
    description: "Venturing out of my comfort zone",
    images: [],
  },
];
export const Fun = () => {
  return (
    <div className="fun-container">
      <h1> Something fun </h1>
      {items.map((item, index) => {
        return (
          <div
            className={
              index % 2 === 0
                ? "fun-item-container"
                : "fun-item-container-reverse"
            }
          >
            <div className="fun-item-block">
              <div className="fun-item-styling-block" />
              <div className="fun-item-text-container">
                <h2 className="fun-item-text-title"> {item.title}</h2>
                <h3 className="fun-item-text-description">
                  {item.description}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
