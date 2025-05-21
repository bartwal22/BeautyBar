import React, { useRef, useState } from "react";
import "../styles/Cosmetics.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import foundation from "../assets/foundation.jpeg";
import bodylotion from "../assets/bodylotion.jpeg";
import eyemask from "../assets/eyemask.jpeg";
import facewash from "../assets/facewash.jpeg";
import gloss from "../assets/gloss.jpeg";
import lipstick from "../assets/lipstick.jpeg";
import mask from "../assets/mask.jpeg";
import blush from "../assets/blush.jpeg";
import perfume1 from "../assets/perfume1.jpeg";
import perfume2 from "../assets/perfume2.jpeg";
import perfume3 from "../assets/perfume3.jpeg";
import hairmask from "../assets/hairmask.jpeg";
import hairoil from "../assets/hairoil.jpeg";
import scalp from "../assets/scalp.jpeg";
import nail1 from "../assets/nail1.jpeg";
import nail2 from "../assets/nail2.jpeg";
import nail3 from "../assets/nail3.jpeg";
import cream from "../assets/cream.jpeg";
import bodyscrub1 from "../assets/bodyscrub1.jpeg";
import bodyscrub2 from "../assets/bodyscrub2.jpeg";
import bodyoil from "../assets/bodyoil.jpeg";
import bodywash from "../assets/bodywash.jpeg";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
const products = [
  {
    name: "Foundation",
    image: foundation,
    tags: ["SALE"],
    price: "$25",
    category: "Make Up",
  },
  {
    name: "Body Wash",
    image: bodywash,
    tags: ["SALE"],
    price: "$25",
    category: "SPA",
  },
  {
    name: " Body Scrub",
    image: bodyscrub1,
    tags: ["SALE"],
    price: "$25",
    category: "SPA",
  },
  {
    name: "Body Scrub",
    image: bodyscrub2,
    tags: ["SALE"],
    price: "$25",
    category: "SPA",
  },
  {
    name: "Body Oil",
    image: bodyoil,
    tags: ["SALE"],
    price: "$25",
    category: "SPA",
  },
  {
    name: "Body Lotion",
    image: bodylotion,
    tags: ["SALE", "NEW"],
    price: "$15",
    category: ["Skin care", "SPA"],
  },
  {
    name: "Eye Mask",
    image: eyemask,
    tags: ["NEW"],
    price: "$10",
    category: "Skin care",
  },
  {
    name: "Face Wash",
    image: facewash,
    tags: [],
    price: "$20",
    category: "Skin care",
  },
  {
    name: "Lip Gloss",
    image: gloss,
    tags: [],
    price: "$18",
    category: "Make Up",
  },
  {
    name: "Lipstick",
    image: lipstick,
    tags: [],
    price: "$30",
    category: "Make Up",
  },
  {
    name: "Face Mask",
    image: mask,
    tags: [],
    price: "$22",
    category: "Skin care",
  },
  { name: "Blush", image: blush, tags: [], price: "$43", category: "Make Up" },
  {
    name: "Roses 'N Roses",
    image: perfume1,
    tags: [],
    price: "$43",
    category: "Perfume",
  },
  {
    name: "Paris",
    image: perfume2,
    tags: [],
    price: "$43",
    category: "Perfume",
  },
  {
    name: "Always in Rose",
    image: perfume3,
    tags: [],
    price: "$43",
    category: "Perfume",
  },
  {
    name: "Hair Mask",
    image: hairmask,
    tags: [],
    price: "$43",
    category: "Hair care",
  },
  {
    name: "Nail Cuticle Oil",
    image: nail1,
    tags: [],
    price: "$43",
    category: "Nails",
  },
  {
    name: "Scalp Care",
    image: scalp,
    tags: [],
    price: "$43",
    category: "Hair care",
  },
  {
    name: "Hair Oil",
    image: hairoil,
    tags: [],
    price: "$43",
    category: "Hair care",
  },
  {
    name: "Deep Vita C Capsule Cream ",
    image: cream,
    tags: [],
    price: "$43",
    category: "Skin care",
  },
  {
    name: "The Rose Soak",
    image: nail2,
    tags: [],
    price: "$43",
    category: "Nails",
  },
  {
    name: "Nail Serum",
    image: nail3,
    tags: [],
    price: "$43",
    category: "Nails",
  },
];

const categories = [
  "Make Up",
  "SPA",
  "Perfume",
  "Nails",
  "Skin care",
  "Hair care",
];

export default function Cosmetics() {
  const sliderRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Make Up");

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const filteredProducts = products.filter((product) =>
    product.category.includes(activeCategory)
  );

  return (
    <div className="cosmetics-container">
      <h2 className="cosmetics-subtitle">Cosmetics</h2>
      <h1 className="cosmetics-title">Trending Products</h1>
      <p className="cosmetics-description">
        Nourish your skin with toxin-free cosmetic products. With the offers
        that you can't refuse.
      </p>

      <div className="cosmetics-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="slider-controls">
        <button className="slider-btn" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="product-slider-wrapper" ref={sliderRef}>
          <div className="product-slider">
            {filteredProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-tags">
                    {product.tags.includes("SALE") && (
                      <span className="tag sale">SALE</span>
                    )}
                    {product.tags.includes("NEW") && (
                      <span className="tag new">NEW</span>
                    )}
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-btn" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>

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
