import React from "react";
import persona1 from "./../../../assets/images/bloome/emphasize/persona1.png";
import persona1Mobile from "./../../../assets/images/bloome/emphasize/persona1Mobile.png";
import { useWindowDimensions } from "../../../hooks/hooks";
export const SolutionDesign1 = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="emphasize-design-1-container">
      <h2>Emily Chen </h2>
      <h3 className="remove-margin">
        Graphic Designer | Frequent Buyer of Bouquets for Home Decor
      </h3>
      {width > 1350 ? (
        <div className="emphasize-design-1-text-container">
          <div>
            <p>
              <b>
                <i>
                  "My home is my design haven, but my hectic schedule hardly
                  allows me to maintain it the way I'd love to. I need a floral
                  solution that's as stylish and low-maintenance as my lifestyle
                  - something that effortlessly keeps my space vibrant and
                  reflects my aesthetic preferences without adding to my busy
                  day."
                </i>
              </b>
            </p>
            <h3> Lifestyle </h3>
            <p>
              Emily leads a fast-paced urban life as a graphic designer in the
              city. Her apartment is her personal design studio, reflecting her
              love for contemporary, stylish, and low-maintenance decor. She
              thrives in her dynamic environment but finds little time for
              activities like shopping for home decor.
            </p>
            <h3> Motivations</h3>
            <ul>
              <li>
                <p>
                  Emily is driven by the desire to create a living space that
                  reflects her sophisticated design taste.
                </p>
              </li>
              <li>
                <p>
                  She seeks effortless ways to keep her home aesthetically
                  pleasing without compromising on style or her busy schedule.
                </p>
              </li>
              <li>
                <p>
                  Her goal is to find solutions that combine beauty,
                  functionality, and efficiency in home decor.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <img src={persona1} width={"100%"} />
          </div>
          <div>
            <h3 className="remove-margin">Pain points</h3>
            <h4 className="remove-margin">
              Time Scarcity/ Maintenance-Style Balance/ Aesthetic Inconsistency
            </h4>
            <ul>
              <li>
                <p>
                  Time Constraints: With her demanding job, Emily struggles to
                  find time for selecting and maintaining home decor, especially
                  floral arrangements.
                </p>
              </li>
              <li>
                <p>
                  Design and Maintenance Balance: She desires decor that is not
                  only visually appealing but also low-maintenance, aligning
                  with her hectic lifestyle.
                </p>
              </li>
              <li>
                <p>
                  Aesthetic Harmony: Emily finds it challenging to find floral
                  arrangements that consistently match her evolving design
                  preferences.
                </p>
              </li>
            </ul>
            <h3> User Journey</h3>
            <p>
              In her chic city apartment, Emily's passion for design is evident.
              Yet, her busy career leaves her with little time to indulge in her
              love for home styling, particularly with fresh flowers. She often
              experiences the frustration of her living space not fully
              reflecting her design ethos due to time-consuming maintenance and
              a lack of expertise in selecting the right floral arrangements.
              Emily longs for a way to seamlessly integrate stylish,
              maintenance-friendly floral decor that resonates with her personal
              taste and complements her lifestyle.
            </p>
          </div>
        </div>
      ) : (
        <div className="emphasize-design-1-text-container-mobile">
          <div style={{ minHeight: "210px" }}>
            <div className="emphasize-design-1-text-image">
              <img
                src={persona1Mobile}
                width={"180px"}
                height={"180px"}
                style={{ padding: "20px" }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <p>
                <b>
                  "My home is my design haven, but my hectic schedule hardly
                  allows me to maintain it the way I'd love to. I need a floral
                  solution that's as stylish and low-maintenance as my lifestyle
                  - something that effortlessly keeps my space vibrant and
                  reflects my aesthetic preferences without adding to my busy
                  day."
                </b>
              </p>
            </div>
          </div>
          <div className="emphasize-design-1-more-text-mobile">
            <div>
              <h3> LifeStyle</h3>
              <p>
                Emily leads a fast-paced urban life as a graphic designer in the
                city. Her apartment is her personal design studio, reflecting
                her love for contemporary, stylish, and low-maintenance decor.
                She thrives in her dynamic environment but finds little time for
                activities like shopping for home decor.
              </p>
            </div>
            <div>
              <h3> Pain Points</h3>
              <p>
                <b>Time Constraints </b>: With her demanding job, Emily
                struggles to find time for selecting and maintaining home decor,
                especially floral arrangements.
              </p>
              <p>
                <b>Design and Maintenance Balance</b>: She desires decor that is
                not only visually appealing but also low-maintenance, aligning
                with her hectic lifestyle.
              </p>
              <p>
                <b>Aesthetic Harmony</b>: Emily finds it challenging to find
                floral arrangements that consistently match her evolving design
                preferences
              </p>
            </div>
            <div>
              <h3> Motivations </h3>
              <p>
                Emily is driven by the desire to create a living space that
                reflects her sophisticated design taste.
              </p>
              <p>
                She seeks effortless ways to keep her home aesthetically
                pleasing without compromising on style or her busy schedule.
              </p>
              <p>
                Her goal is to find solutions that combine beauty,
                functionality, and efficiency in home decor.
              </p>
            </div>
          </div>
          <div>
            <h3> User Journey</h3>
            <p>
              In her chic city apartment, Emily's passion for design is evident.
              Yet, her busy career leaves her with little time to indulge in her
              love for home styling, particularly with fresh flowers. She often
              experiences the frustration of her living space not fully
              reflecting her design ethos due to time-consuming maintenance and
              a lack of expertise in selecting the right floral arrangements.
              Emily longs for a way to seamlessly integrate stylish,
              maintenance-friendly floral decor that resonates with her personal
              taste and complements her lifestyle.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
