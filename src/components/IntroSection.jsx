import React, { useRef, useState } from "react";
import "../styles/IntroSection.css";
import products from "../assets/products.jpeg";
import video from "../assets/video.mp4";

export default function IntroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="intro-section">
      {/* 🌸 Row 1: Collection Section */}
      <div className="row collection-row">
        <div className="col image-col">
          <img src={products} alt="New Collection" className="full-image" />
        </div>
        <div className="col text-col">
          <h4 className="collection-subtitle">Check This Out</h4>
          <h1 className="collection-title">
            New Collection
            <br />
            For Delicate Skin
          </h1>
          <p className="collection-desc">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can’t refuse.
          </p>
          <p className="collection-desc">
            New and improved organic skincare designed just for sensitive skin
            with lightweight formulas and rich hydrating ingredients.
          </p>
          <button className="collection-button">SHOP NOW</button>
        </div>
      </div>

      {/* 🎥 Row 2: Video Section */}
      <div className="row video-row">
        <div className="col text-col">
          <h4 className="about-subtitle">About Us</h4>
          <h2 className="about-title">Who We Are</h2>
          <p className="about-desc">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can’t refuse.
          </p>
          <p className="about-desc">
            Meet your ingredients and explore the clean revolution in beauty.
            We’re all about promoting self-care with ingredients you can trust.
          </p>
        </div>
        <div className="col video-col">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="video-display"
              poster="https://via.placeholder.com/640x360.png?text=Promotion+Video"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <button className="custom-play-button" onClick={handlePlay}>
                ▶
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
