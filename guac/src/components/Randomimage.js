import React, { useState } from "react";
import image1 from "../assest/images/blackC.png";
import image2 from "../assest/images/avocado.jpeg";

const Randomimage = () => {
  //   const images = [
  //     {
  //       image1: image1,
  //       image2: image2,
  //     },
  //   ];
  const [image, setImage] = useState(image1);
  function changeImage() {
    setImage(image2);
  }

  return (
    <div className="change">
      <div className="contaner">
        <img className="image" alt="" src={image} />
        <button type="button" className="btn" onClick={changeImage}>
          start
        </button>
      </div>
    </div>
  );
};

export default Randomimage;
