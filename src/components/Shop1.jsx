import React from "react";
import { useNavigate } from "react-router-dom";
import eyemask from "../assets/eyemask.jpeg";
import "../styles/Shop1.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Shop1() {
  const navigate = useNavigate();
  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-section">
          <img src={eyemask} alt="Hydrogel Patches" className="detail-image" />
        </div>
        <div className="product-info-section">
          <h1 className="detail-title">Hydrogel Patches</h1>
          <div>
            <span className="detail-price">₹200.95</span>
            <span className="old-price">₹280.00</span>
          </div>
          <p className="detail-description">
            Universal foundation masks skin imperfections and gives it a matte
            finish, remaining completely invisible on the face. The foundation
            is suitable for any skin type. Thanks to a unique combination of
            pigments, the foundation adapts perfectly to even the smallest
            features of skin tone, creating an even and natural tone
          </p>
          <div className="contact-social1">
            <h4>Find us here:</h4>
            <div className="social-icons-2">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
          <button className="add-to-cart-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
