import React from "react";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
import "../styles/BlogComp2.css";
export default function BlogComp2() {
  return (
    <div className="blog-section2">
      <div className="blog-cards2">
        {/* Card 1 */}
        <div className="blog-card2">
          <div className="image-container2">
            <img src={blog1} alt="Perfumes" />
            <div className="date-badge2">
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
          <p className="btn2">Read more--</p>
        </div>

        {/* Card 2 */}
        <div className="blog-card2">
          <div className="image-container2">
            <img src={blog2} alt="Skin Care" />
            <div className="date-badge2">
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
          <p className="btn2">Read more--</p>
        </div>
        <div className="blog-card2">
          <div className="image-container2">
            <img src={blog2} alt="Skin Care" />
            <div className="date-badge2">
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
          <p className="btn2">Read more--</p>
        </div>
        <div className="blog-card2">
          <div className="image-container2">
            <img src={blog2} alt="Skin Care2" />
            <div className="date-badge2">
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
          <p className="btn2">Read more--</p>
        </div>
      </div>
    </div>
  );
}
