import React, { useState } from "react";

interface MovingImageProps {
  mainImage: string;
  backgroundImage?: string;
  width: string;
  imageWidth?: string;
}

export const MovingImage = ({
  mainImage,
  backgroundImage,
  width,
  imageWidth,
}: MovingImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="moving-image-container" style={{ width: width }}>
      <img
        className={`moving-image-main ${isHovered ? "isHovered" : ""}`}
        alt="moving-image"
        src={mainImage}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          maxWidth: imageWidth,
        }}
      />
      <img
        src={backgroundImage}
        alt="moving-image-bg"
        className={`moving-image-bg ${isHovered ? "isHovered" : ""}`}
      />
    </div>
  );
};
