import React from "react";
import highFidelity1 from "./../../../assets/images/bloome/prototype/highFidelity1.png";
import highFidelity2 from "./../../../assets/images/bloome/prototype/highFidelity2.png";
import highFidelity3 from "./../../../assets/images/bloome/prototype/highFidelity3.png";

export const HighFidelity = () => {
  return (
    <div className="bloome-high-fidelity-container">
      <div className="bloome-high-fidelity-item">
        <div className="bloome-high-fidelity-text-container">
          <h3> KEY FEATURE 1 Curated Collections & Floral Insights</h3>
          <p>
            Find the perfect expression of affection with Bloomè's themed and
            designer-curated bouquets, crafted for every occasion. Plus,
            brighten your day with our cheerful flower care tips, perfect for
            budding home florists!
          </p>
        </div>
        <div className="bloome-high-fidelity-image-container">
          <img src={highFidelity1} width={"100%"} />
        </div>
      </div>
      <div className="bloome-high-fidelity-item right">
        <div className="bloome-high-fidelity-text-container">
          <h3>KEY FEATURE 2 AR BOUQUET PREVIEW</h3>
          <p>
            Say goodbye to guesswork with Bloomè's AR Preview! Experience the
            true look and size of your bouquet before purchase, ensuring what
            you choose is exactly what graces your space.
          </p>
        </div>
        <div className="bloome-high-fidelity-image-container">
          <img src={highFidelity2} width={"100%"} />
        </div>
      </div>
      <div className="bloome-high-fidelity-item">
        <div className="bloome-high-fidelity-text-container">
          <h3> KEY FEATURE 3 REAL-TIME BOUQUET TRACKING</h3>
          <p>
            Track your blooms in bloom with Bloomè's live tracking—no more
            guessing, just real-time updates until your bouquet arrives at your
            doorstep.
          </p>
        </div>
        <div className="bloome-high-fidelity-image-container">
          <img src={highFidelity3} width={"100%"} />
        </div>
      </div>
    </div>
  );
};
