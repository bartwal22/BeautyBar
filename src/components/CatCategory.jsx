import React from "react";
import cat1 from "../assets/cat1.jpeg";
import cat2 from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
import cat6 from "../assets/cat6.jpg";
import "../styles/CatCategory.css";

export default function CatCategory() {
  const categories = [
    { img: cat1, title: "SPA" },
    { img: cat2, title: "NAILS" },
    { img: cat3, title: "FRAGRANCE" },
    { img: cat4, title: "MakeUp" },
    { img: cat5, title: "Skin" },
    { img: cat6, title: "Hair" },
  ];

  return (
    <div className="cat-section">
      <div className="cat-grid">
        {categories.map((cat, index) => (
          <div className="cat-card" key={index}>
            <img src={cat.img} alt={`Category ${index + 1}`} />
            <div className="cat-info">
              <h2 className="cat-title">{cat.title}</h2>
              <p className="cat-link">BROWSE PRODUCTS →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
