import React from "react";
import processelement from "./../../../assets/images/bloome/process/processElement.png";

export const ProcessElement = ({
  text,
  description,
}: {
  text: string;
  description: string[];
}) => {
  return (
    <div className="bloome-process-element-container">
      <div className="bloome-process-element-image-container">
        <img src={processelement} width={"140px"} height={"140px"} />
        <h3> {text}</h3>
      </div>
      <div>
        <ul>
          {description.map((descriptionItem, i) => {
            return (
              <li key={i}>
                <p>{descriptionItem}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
