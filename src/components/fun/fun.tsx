import React from "react";
import "./fun.less";
import {
  archeologyImages,
  funImages,
  photographyImages,
  travellingImages,
} from "./images";
import thesis from "./../../assets/files/thesis.pdf";

interface FunItem {
  title: string;
  description: string;
  descriptionLink?: string;
  images: string[];
}

const items: FunItem[] = [
  {
    title: "Archaeological Project",
    description:
      "From Sherds to Society: An analysis of Kwahe'e Black-on-white and Social Interaction in the Taos District",
    descriptionLink: thesis,
    images: archeologyImages,
  },
  {
    title: "Photography",
    description: "Photos are my way to connect with people all around world",
    images: photographyImages,
  },
  {
    title: "Travelling",
    description: "Where's my next adventure",
    images: travellingImages,
  },
  {
    title: "Trying new things",
    description: "Venturing out of my comfort zone",
    images: funImages,
  },
];
export const Fun = () => {
  return (
    <div className="fun-container">
      <h1> Something fun </h1>
      {items.map((item, index) => {
        return (
          <div key={index}>
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
                    {item.descriptionLink ? (
                      <a
                        href={item.descriptionLink}
                        target="_blank"
                        rel="noopener"
                      >
                        {item.description}
                      </a>
                    ) : (
                      item.description
                    )}
                  </h3>
                </div>
              </div>
            </div>
            <div className="fun-item-image-container">
              {item.images.map((image, i) => {
                return <img key={i} src={image} height={"400px"} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
