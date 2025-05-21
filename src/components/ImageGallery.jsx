import React from "react";
import "../styles/ImageGallery.css";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <img src={img1} alt="Facial" />
      <img src={img2} alt="Makeup kit" />
      <img src={img3} alt="Eye makeup" />
      <img src={img4} alt="Skincare products" />
      <img src={img5} alt="Cosmetics" />
      <img src={img6} alt="Makeup application" />
    </div>
  );
};

export default ImageGallery;
