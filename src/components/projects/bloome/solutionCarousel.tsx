import React from "react";
import { useState } from "react";
import home from "./../../../assets/images/bloome/solution/home.gif";
import customize from "./../../../assets/images/bloome/solution/customize.gif";
import tracking from "./../../../assets/images/bloome/solution/tracking.gif";
interface ItemProps {
  title: string;
  description: string[];
  image: string;
}
const items: ItemProps[] = [
  {
    title: "SELECT BOUQUETS",
    description: [
      "Explore and choose your perfect bouquet with us!",
      "Plus, delve into a world of floral wisdom where you'll find essential care tips to keep your flowers flourishing.",
      "Stay in the loop with the latest bouquet trends, and uncover the story of Bloomè on our Discover page.",
    ],
    image: home,
  },
  {
    title: "CUSTOMIZE & PREVIEW YOUR BOUQUET",
    description: [
      "Design your personalized bouquet on our product page and use our preview feature to envision how it will brighten up your space.",
      "Consult our size guide page for a realistic perspective of the bouquet's dimensions in your home and as you hold it in your hands.",
    ],
    image: customize,
  },
  {
    title: "ORDER & TRACKING",
    description: [
      "Once your order is placed, stay updated with real-time tracking of your order status.",
      "You can also manage and review past orders in your order history.",
    ],
    image: tracking,
  },
];

export const SolutionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <div className="bloome-solution-carousel-container">
      <div className="bloome-solution-carousel-image-container">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          width="270px"
          height="580px"
        />
      </div>
      <div className="bloome-solution-carousel-text-container">
        <div className="bloome-solution-carousel-button-row">
          {items.map((_, index) => {
            return (
              <div
                className={`bloome-solution-carousel-button ${
                  currentIndex === index ? "isSelected" : ""
                }`}
                role="button"
                onClick={() => setCurrentIndex(index)}
              />
            );
          })}
        </div>
        <h3 style={{ fontSize: "30px", color: "white" }}>
          {items[currentIndex].title}
        </h3>
        <div style={{ paddingRight: "50px" }}>
          {items[currentIndex].description.map(
            (description, descriptionIndex) => {
              return <p key={descriptionIndex}>{description} </p>;
            }
          )}
        </div>
      </div>
    </div>
  );
};
