import React from "react";
import persona2 from "./../../../assets/images/bloome/emphasize/persona2.png";
import persona2Mobile from "./../../../assets/images/bloome/emphasize/persona2Mobile.png";
import { useWindowDimensions } from "../../../hooks/hooks";

export const SolutionDesign2 = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="emphasize-design-2-container">
      <h2>David Martinez </h2>
      <h3 className="remove-margin">
        Financial Analyst | Occasional Buyer of Premium Bouquets
      </h3>
      {width > 1350 ? (
        <>
          <div className="emphasize-design-1-text-container">
            <div>
              <h3>Lifestyle</h3>
              <p>
                David is a detail-oriented financial analyst living in the
                suburbs. His lifestyle is structured and busy, focused on his
                career and personal goals. He values significant moments and
                celebrations, believing in making them memorable.
              </p>
            </div>
            <div>
              <h3>Motivations</h3>
              <ul>
                <li>
                  <p>
                    David seeks to make special occasions like anniversaries,
                    Valentine's Day, and birthdays extraordinary with thoughtful
                    gestures, such as purchasing premium bouquets.
                  </p>
                </li>
                <li>
                  <p>
                    He aims to find unique and high-quality floral arrangements
                    that express his sentiments perfectly.
                  </p>
                </li>
                <li>
                  <p>
                    His goal is to have a reliable, go-to solution for selecting
                    standout floral gifts for these important moments.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="remove-margin">Pain points</h3>
              <h4 className="remove-margin">
                Choice Overwhelm/ Floral Knowledge Gap/ Efficiency
              </h4>
              <ul>
                <li>
                  <p>
                    Faced with a multitude of bouquet options, David often feels
                    overwhelmed and unsure about selecting the right one.
                  </p>
                </li>
                <li>
                  <p>
                    As someone who doesn’t buy flowers regularly, he lacks the
                    expertise to choose bouquets that are both unique and
                    appropriate for the occasion.
                  </p>
                </li>
                <li>
                  <p>
                    With a busy schedule, he prefers a quick and straightforward
                    selection process without compromising on the quality or
                    uniqueness of the bouquet.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <img
              src={persona2}
              style={{ padding: "20px" }}
              width={"100%"}
              height={"100%"}
            />
            <div>
              <h3> User Journey</h3>
              <p>
                David values making special occasions truly memorable. However,
                when it comes to buying flowers, he often finds himself lost in
                a sea of options, unsure of what to pick. Whether it's a
                romantic gesture for Valentine's Day or a birthday surprise,
                David seeks to find that perfect floral expression. He yearns
                for a streamlined, informative shopping experience that
                simplifies his decision-making, ensuring each special moment is
                celebrated with a stunning, appropriate bouquet.
              </p>
              <p>
                <b>
                  <i>
                    "I want to mark special occasions with something unique and
                    beautiful, like a perfect bouquet. But the choices are
                    overwhelming, and I'm not sure what to pick. I need a way to
                    find exceptional flowers that speak volumes, without
                    spending hours deciding or worrying if I made the right
                    choice."
                  </i>
                </b>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="emphasize-design-1-text-container-mobile">
          <div style={{ minHeight: "210px" }}>
            <div className="emphasize-design-1-text-image">
              <img
                src={persona2Mobile}
                width={"180px"}
                height={"180px"}
                style={{ padding: "20px" }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <p>
                <b>
                  "I want to mark special occasions with something unique and
                  beautiful, like a perfect bouquet. But the choices are
                  overwhelming, and I’m not sure what to pick. I need a way to
                  find exceptional flowers that speak volumes, without spending
                  hours deciding or worrying if I made the right choice."
                </b>
              </p>
            </div>
          </div>
          <div className="emphasize-design-1-more-text-mobile">
            <div>
              <h3> LifeStyle</h3>
              <p>
                David is a detail-oriented financial analyst living in the
                suburbs. His lifestyle is structured and busy, focused on his
                career and personal goals. He values significant moments and
                celebrations, believing in making them memorable.
              </p>
            </div>
            <div>
              <h3> Pain Points</h3>
              <p>
                <b>Decision Overwhelm </b>: Faced with a multitude of bouquet
                options, David often feels overwhelmed and unsure about
                selecting the right one.
              </p>
              <p>
                <b>Lack of Floral Knowledge</b>: As someone who doesn't buy
                flowers regularly, he lacks the expertise to choose bouquets
                that are both unique and appropriate for the occasion.
              </p>
              <p>
                <b>Time Efficiency</b>: With a busy schedule, he prefers a quick
                and straightforward selection process without compromising on
                the quality or uniqueness of the bouquet.
              </p>
            </div>
            <div>
              <h3> Motivations </h3>
              <p>
                David seeks to make special occasions like anniversaries,
                Valentine's Day, and birthdays extraordinary with thoughtful
                gestures, such as purchasing premium bouquets.
              </p>
              <p>
                He aims to find unique and high-quality floral arrangements that
                express his sentiments perfectly.
              </p>
              <p>
                His goal is to have a reliable, go-to solution for selecting
                standout floral gifts for these important moments.
              </p>
            </div>
          </div>
          <div>
            <h3> User Journey</h3>
            <p>
              David values making special occasions truly memorable. However,
              when it comes to buying flowers, he often finds himself lost in a
              sea of options, unsure of what to pick. Whether it's a romantic
              gesture for Valentine's Day or a birthday surprise, David seeks to
              find that perfect floral expression. He yearns for a streamlined,
              informative shopping experience that simplifies his
              decision-making, ensuring each special moment is celebrated with a
              stunning, appropriate bouquet.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
