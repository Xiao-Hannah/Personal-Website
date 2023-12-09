import React from "react";
import "./fridgeFriend.less";
import "./tablecontent.less";

export const FridgeFriend = () => {
  return (
    <div className="fridgeFriend-container">
      <div className="fridgeFriend-title">
        <div className="fridgeFriend-title-container">
          <h1>
            Fridge Friend: AI-Powered camera that revolutionize your kitchen
          </h1>
        </div>
        <div className="fridgeFriend-header-container">
          <div className="fridgeFriend-header-info-container">
            <div style={{ width: "45%", padding: "20px 20px 20px 0px" }}>
              <h3>Domain</h3>
              <p>UX/UI</p>
              <h3> Team </h3>
              <p>Hannah Xiao</p>
              <p>Alex Deli-Ivanov</p>
              <p>Lydia Claire Futrell</p>
              <p>Jing Cheng</p>
            </div>
            <div style={{ width: "45%", padding: "20px" }}>
              <h3> Skills</h3>
              <p>Primary Research</p>
              <p>Competitive Analysis</p>
              <p> Digital Ethnography Research</p>
              <p> Stakeholder + User Interviews</p>
            </div>
          </div>
          <div className="fridgeFriend-header-about-container">
            <p>
              Food wastage is a growing concern and managing household chores
              efficiently is more important than ever, the average American
              family is constantly seeking ways to save both time and money.
              This is where FridgeFriend steps in, revolutionizing the way we
              interact with our kitchen. With nearly 40% of food in the U.S.
              being wasted and families losing approximately $1,500 a year on
              thrown-out groceries, FridgeFriend offers an innovative solution
              to these problems.
            </p>

            <p>
              FridgeFriend introduces a unique combination of auto-restocking,
              an automatic recipe generator, and an intuitive in-fridge camera
              system is designed to simplify your life, reduce waste, and save
              money. Welcome to the future of kitchen management - welcome to
              FridgeFriend.
            </p>
          </div>
        </div>
      </div>
      <div className="table-content-container">
        <div className="table-content">
          <div>
            <h3> Solution </h3>
          </div>
          <div>
            <h3> Process </h3>
          </div>
          <div>
            <h3> Ideation </h3>
          </div>
          <div>
            <h3> Evaulation </h3>
          </div>
          <div>
            <h3> Iteration </h3>
          </div>
          <div>
            <h3> Prototype </h3>
          </div>
          <div>
            <h3> Business Response </h3>
          </div>
          <div>
            <h3> Retrospective </h3>
          </div>
        </div>
        <div className="table-content-text">
          <div className="fridgeFriend-body">
            <h3 className="fridgeFriend-body-title"> Solution </h3>
            <h2 className="fridgeFriend-body-subtitle">
              An innovative solution to create a convenient lifestyle that
              reduces waste and saves money.
            </h2>
            <p className="fridgeFriend-body-description">
              FridgeFriend is a groundbreaking solution that redefines kitchen
              efficiency. By integrating in-fridge cameras with smart
              technology, it tracks and manages your groceries, alerting you to
              use items before they expire. Coupled with an automatic recipe
              generator and a smart shopping assistant, it not only minimizes
              food waste but also streamlines your grocery planning and
              shopping, making kitchen management effortless and sustainable.
              FridgeFriend is the future of smart, waste-free, and efficient
              household food management.
            </p>
          </div>
          <div className="fridgeFriend-body">
            <h3 className="fridgeFriend-body-title"> Process </h3>
            <h2 className="fridgeFriend-body-subtitle">
              How to make New York a more sustainable city?
            </h2>
            <div className="fridgeFriend-body-description">
              <p>
                <b> Focus: Food Waste</b>
              </p>
              <p>
                In addressing New York City's multifaceted sustainability
                challenges, including high carbon emissions and substantial
                waste management issues, our group has chosen to concentrate on
                <b> food waste</b>. Despite 86% of residents aspiring to reduce
                their food waste, the average household still discards 8.4lbs of
                food weekly. By focusing on this area, we aim to bridge the gap
                between intention and action, offering practical solutions to
                significantly impact the city's sustainability efforts.
              </p>
            </div>
            <h3
              className="fridgeFriend-body-title"
              style={{ paddingTop: "30px" }}
            >
              Problem Statement
            </h3>
            <h2 className="fridgeFriend-body-subtitle">
              How can New Yorkers make decisions that minimize the amount of
              food ending up in landfills?
            </h2>
          </div>
          <div className="fridgeFriend-body">
            <h3 className="fridgeFriend-body-title">Identify Opportunities</h3>
            <div className="fridgeFriend-body-description">
              <p>
                In our primary research, we realized that with the goal of zero
                waste to landfill by 2030, there is a huge gap between
                residents' willingness to reduce food waste and the large amount
                of waste produced by households. We then came up with three
                ideas to solve the problems.
              </p>
            </div>

            <h3
              className="fridgeFriend-body-title"
              style={{ paddingTop: "30px" }}
            >
              1st Round of Ideation
            </h3>
            <h3>
              IDEA 1: Smart Fridge App Support and Educate People on Mindful
              Shopping and Reducing Waste
            </h3>
            <div className="fridgeFriend-body-description">
              <p>
                <b> Key Features</b>
              </p>
              <ol>
                <li>
                  <p>
                    <b>Intelligent Expiry Management </b>
                  </p>
                  <p>
                    Employs a fridge-mounted camera to photograph and monitor
                    your fridge contents, automatically generating expiration
                    dates for fruits and vegetables, and offering manual or
                    barcode scanning entry for packaged foods, all displayed in
                    an easy-to-view food list with freshness indicators.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Tailored Recipe Suggestions </b>
                  </p>
                  <p>
                    Analyzes current fridge inventory to suggest recipes,
                    helping you create delicious meals with what you have on
                    hand, minimizing waste and grocery trips.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Eco-friendly Disposal Guide </b>
                  </p>
                  <p>
                    Provides a map of nearby disposal options for waste food,
                    encouraging responsible and environmentally friendly waste
                    management.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
