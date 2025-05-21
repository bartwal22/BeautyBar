import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiGooglepay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Row with 3 Sections */}
      <div className="footer-top">
        <div className="social-media">
          <span>Find us here:</span>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-logo">Beauty Bar</div>

        <div className="payment-methods">
          <span>Payment methods:</span>
          <div className="payment-icons">
            <SiVisa />
            <SiMastercard />
            <SiPaypal />
            <SiGooglepay />
          </div>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="footer-main">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>About us</li>
              <li>Categories</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Categories</h4>
            <ul>
              <li>Make up</li>
              <li>SPA</li>
              <li>Perfume</li>
              <li>Nails</li>
              <li>Skin care</li>
              <li>Hair care</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Useful Links</h4>
            <ul>
              <li>Careers</li>
              <li>Privacy policy</li>
              <li>Terms of use</li>
              <li>Support</li>
              <li>Shipping details</li>
              <li>Information</li>
            </ul>
          </div>

          <div className="footer-column contact-info">
            <h4>Contact</h4>
            <p>
              <FaMapMarkerAlt /> 27 Division St, New York, NY 10002, USA
            </p>
            <p>
              <FaPhoneAlt /> +1 345 99 71 345
            </p>
            <p>
              <FaPhoneAlt /> +1 345 74 64 975
            </p>
            <p>
              <FaEnvelope /> info@beshop.com
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© All rights reserved. Beauty Bar 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
