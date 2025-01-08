import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MovingImageProps {
  mainImage: string;
  backgroundImage?: string;
  width: string;
  imageWidth?: string;
  link: string;
}

export const MovingImage = ({
  mainImage,
  backgroundImage,
  width,
  imageWidth,
  link,
}: MovingImageProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="moving-image-container" style={{ width: width }}>
      <img
        className={`moving-image-main ${isHovered ? "isHovered" : ""}`}
        alt="moving-image"
        src={mainImage}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(link)}
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
