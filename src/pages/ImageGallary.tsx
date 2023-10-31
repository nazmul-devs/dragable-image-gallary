import React from "react";
import img1 from "../images/image-1.webp";
import img2 from "../images/image-2.webp";
import img3 from "../images/image-3.webp";
import img4 from "../images/image-4.webp";
import img5 from "../images/image-5.webp";
import img6 from "../images/image-6.webp";
import img7 from "../images/image-7.webp";
import img8 from "../images/image-8.webp";
import img9 from "../images/image-9.webp";
import img10 from "../images/image-10.jpeg";
import img11 from "../images/image-11.jpeg";

import "../styles/imageGallary.css";

type Props = {};

function ImageGallary({}: Props) {
  return (
    <div>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1">3 File Selected</label>

      <button>Delete files</button>

      <hr />

      <div className="gallary">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
      </div>
    </div>
  );
}

export default ImageGallary;
