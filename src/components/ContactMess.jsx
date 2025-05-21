import React from "react";
import contactphoto from "../assets/contphoto.jpg";
import "../styles/ContactMess.css";

export default function ContactMess() {
  return (
    <div className="cont-container">
      <div className="cont-section image-section">
        <img src={contactphoto} alt="Message" className="cont-image" />
      </div>
      <div className="cont-section form-section">
        <div className="cont-text">
          <h4 className="cont-label">Write to us</h4>
          <h1 className="cont-title">Leave a Message</h1>
          <p className="cont-subtext">
            Write to us if you have any questions, we will
            <br />
            definitely contact you and find a solution.
          </p>
          <div className="input-area">
            <input type="text" className="in-name" placeholder="Enter name" />
            <input
              type="email"
              className="in-email"
              placeholder="Enter email"
            />
            <textarea
              placeholder="Enter your message"
              className="in-textarea"
            />
          </div>
          <button className="cont-button">SEND</button>
        </div>
      </div>
    </div>
  );
}
