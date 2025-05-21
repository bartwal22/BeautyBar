import React from "react";
import "../styles/Home.css";
import image from "../assets/image.jpeg";
export default function Home() {
  return (
    <div className="home-container">
      <img src={image} alt="Home Banner" className="home-image" />
      <div className="image-overlay">
        <p className="tagline">Professional</p>
        <p className="headline">Beauty & Care</p>
        <p className="description">
          Nourish your skin with toxin-free cosmetic products. With the offers
          that you can't refuse.
        </p>
        <button className="shop-button">SHOP NOW</button>
      </div>
    </div>
  );
}
