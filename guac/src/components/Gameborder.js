import React from "react";
import image1 from "../assest/images/blackC.png";
const Gameborder = () => {
  return (
    <div className="border">
      <div className="first">
        <img src={image1} alt="black circle" />
        <img src={image1} alt="black circle" />
        <img src={image1} alt="black circle" />
      </div>

      <div className="second">
        <img src={image1} alt="black circle" />
        <img src={image1} alt="black circle" />
      </div>
    </div>
  );
};

export default Gameborder;
