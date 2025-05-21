import React from "react";
import "../styles/Categories.css";
import cat1 from "../assets/cat1.jpeg";
import cat2 from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";

export default function Categories() {
  const categories = [
    { img: cat1, title: "SPA" },
    { img: cat2, title: "NAILS" },
    { img: cat3, title: "FRAGRANCE" },
  ];

  return (
    <div className="categories-section">
      <div className="categories-header">
        <h4 className="categories-subtitle">Popular Collections</h4>
        <h1 className="categories-title">Top Categories</h1>
        <p className="categories-desc">
          Nourish your skin with toxin-free cosmetic products. <br />
          With the offers that you can’t refuse.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.img} alt={`Category ${index + 1}`} />
            <div className="category-overlay">
              <h2 className="overlay-title">{cat.title}</h2>
              <p className="overlay-link">BROWSE PRODUCTS →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
