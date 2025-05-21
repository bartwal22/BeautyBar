import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
export default function ContactLogo() {
  return (
    <div>
      <div className="brand-logos">
        <div className="logo-container">
          <img src={logo1} alt="Khaled Fawkes" />
          <img src={logo2} alt="Marama Abbott" />
          <img src={logo3} alt="Phyllis Myers" />
          <img src={logo4} alt="Roland Wilson" />
          <img src={logo5} alt="Alban Walsh" />
        </div>
      </div>
    </div>
  );
}
