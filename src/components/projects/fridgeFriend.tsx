import React from "react";
import "./fridgeFriend.less";

export const FridgeFriend = () => {
  return (
    <div className="fridgeFriend-container">
      <div className="fridgeFriend-title">
        <h1>
          Fridge Friend: AI-Powered camera that revolutionize your kitchen
        </h1>

        <div className="fridgeFriend-header-container">
          <div className="fridgeFriend-header-info-container">
            <div>
              <h3>Domain</h3>
              <p>UX/UI</p>
              <h3> Team </h3>
              <p>Hannah Xiao</p>
              <p>Alex Deli-Ivanov</p>
              <p>Lydia Claire Futrell</p>
              <p>Jing Cheng</p>
            </div>
            <div>
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
    </div>
  );
};
