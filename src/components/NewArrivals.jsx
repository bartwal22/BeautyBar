import React, { useState, useEffect } from "react";
import "../styles/NewArrivals.css";
import perfume1 from "../assets/perfume1.jpeg";
import bodyscrub1 from "../assets/bodyscrub1.jpeg";
import nail3 from "../assets/nail3.jpeg";
import mask from "../assets/mask.jpeg";

const products = [
  {
    id: 1,
    img: perfume1,
    labels: ["NEW"],
    price: "₹34",
    name: "Roses N' Roses",
  },
  {
    id: 2,
    img: bodyscrub1,
    labels: ["SALE", "NEW"],
    price: "₹50",
    name: "Body Scrub",
  },
  { id: 3, img: nail3, labels: ["NEW"], price: "₹60", name: "Nail Oil" },
  { id: 4, img: mask, labels: ["NEW"], price: "₹59", name: "Face Mask" },
];

const NewArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Adjust number of visible items based on screen width
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 600) setItemsToShow(1); // mobile
      else if (window.innerWidth < 992) setItemsToShow(2); // tablet
      else setItemsToShow(3); // desktop
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(products[(currentIndex + i) % products.length]);
    }
    return visible;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="na-section">
      <div className="na-header">
        <h4 className="na-subtitle">Cosmetics</h4>
        <h1 className="na-title">New Arrivals</h1>
        <p className="na-description">
          Nourish your skin with toxin-free cosmetic products. With offers you
          can’t refuse.
        </p>
      </div>

      <div className="na-slider-container">
        <button className="na-nav-btn na-left" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="na-slider">
          {getVisibleProducts().map((product) => (
            <div key={product.id} className="na-card">
              {product.labels.map((label, index) => (
                <div
                  key={index}
                  className={`na-badge ${label === "SALE" ? "na-sale" : ""}`}
                >
                  {label}
                </div>
              ))}
              <img src={product.img} alt={product.name} />
              <div className="na-info">
                <h4 className="na-name">{product.name}</h4>
                <p className="na-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="na-nav-btn na-right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
