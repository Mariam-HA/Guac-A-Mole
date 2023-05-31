import React, { useState } from "react";
import image1 from "../assest/images/blackC.png";
import image2 from "../assest/images/avocado.jpeg";
const Gameborder = () => {
  const [image, setImage] = useState([image1, image1, image1, image1, image1]);
  const [num, setNum] = useState(0);

  function random() {
    return (num = Math.floor(Math.random() * (max - min + 1)) + min);
  }
  const handleClick = () => {
    setNum(random(1, 5));
  };

  return (
    <div className="border">
      <div className="first">
        <img
          src={image[0]}
          alt="black circle"
          id="0"
          onClick={() => {
            const copy = [...image];
            copy[{ num }] = image2;
            setImage(copy);
          }}
        />
        <img src={image[1]} alt="black circle" id="1" />
        <img
          src={image[2]}
          alt="black circle"
          id="2"
          onClick={() => {
            const copy = [...image];
            copy[{ num }] = image2;
            setImage(copy);
          }}
        />
      </div>

      <div className="second">
        <img src={image[3]} alt="black circle" id="3" />
        <img src={image[4]} alt="black circle" id="4" />
      </div>
    </div>
  );
};

export default Gameborder;
