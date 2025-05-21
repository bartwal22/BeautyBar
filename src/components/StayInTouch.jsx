import React from "react";
import "../styles/StayInTouch.css";
import email from "../assets/email.jpeg";

const StayInTouch = () => {
  return (
    <div className="stay-in-touch">
      <div className="overlay-content">
        <img
          src={email}
          alt="Stay In Touch Product"
          className="background-image"
        />
        <div className="text-overlay">
          <h2>Stay In Touch</h2>
          <p>Nourish your skin with toxin-free cosmetic roducts.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayInTouch;
