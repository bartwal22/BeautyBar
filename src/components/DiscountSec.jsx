import React from "react";
import "../styles/DiscountSec.css";
import disc2 from "../assets/disc2.jpeg";

export default function DiscountSec() {
  return (
    <div className="disc-container">
      <div className="image-section">
        <img src={disc2} alt="Discount" className="disc-image" />
      </div>
      <div className="disc-text">
        <h4 className="discount-label">Discount</h4>
        <h1 className="discount-title">
          Get Your{" "}
          <span className="highlight">
            <br />
            50%
          </span>{" "}
          Off
        </h1>
        <p className="discount-subtext">
          Nourish your skin with toxin-free cosmetic products.
          <br />
          With the offers that you can't refuse.
        </p>
        <button className="disc-button">GET NOW!</button>
      </div>
    </div>
  );
}
