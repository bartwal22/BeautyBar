import React from "react";
import "../styles/ContactPara.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const ContactPara = () => {
  return (
    <div className="contact-para-container">
      <div className="contact-para-text">
        <h2>We Take Care Of You</h2>
        <p>
          Email us if you have any questions, we will be sure to contact you and
          find a solution. Also, our managers will help you choose the product
          that suits you best, at the best price. From year to year, the BeShop
          network develops and improves, taking into account all consumer needs
          and market trends. But for us, the concern remains that when coming to
          the BeShop store, customers do not have questions about the
          convenience and comfort of shopping, product quality and the level of
          professionalism of sales consultants.
        </p>
      </div>

      <div className="contact-social">
        <h4>Find us here:</h4>
        <div className="social-icons-1">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};
