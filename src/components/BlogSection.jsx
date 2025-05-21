import React from "react";
import "../styles/BlogSection.css";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <p className="blog-subtitle">Our Blog</p>
        <h1 className="blog-title">The Latest News At BeShop</h1>
        <p className="blog-description">
          Nourish your skin with toxin-free cosmetic products. With the offers
          that you can’t refuse.
        </p>
      </div>

      <div className="blog-cards">
        {/* Card 1 */}
        <div className="blog-card">
          <div className="image-container">
            <img src={blog1} alt="Perfumes" />
            <div className="date-badge">
              June
              <br />
              21
            </div>
          </div>
          <h3>Perfumes, perfumed or eau de toilette?</h3>
          <p>
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can’t refuse.
          </p>
          <p className="btn">Read more--</p>
        </div>

        {/* Card 2 */}
        <div className="blog-card">
          <div className="image-container">
            <img src={blog2} alt="Skin Care" />
            <div className="date-badge">
              June
              <br />
              21
            </div>
          </div>
          <h3>Best multi-step skin care treatment</h3>
          <p>
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can’t refuse.
          </p>
          <p className="btn">Read more--</p>
        </div>
      </div>
      <button className="read-btn">Read Blog</button>
    </div>
  );
};

export default BlogSection;
