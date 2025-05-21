import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Products.css";

import facewash from "../assets/facewash.jpeg";
import gloss from "../assets/gloss.jpeg";
import lipstick from "../assets/lipstick.jpeg";
import eyemask from "../assets/eyemask.jpeg";
import blush from "../assets/blush.jpeg";
import perfume1 from "../assets/perfume1.jpeg";
import perfume2 from "../assets/perfume2.jpeg";
import perfume3 from "../assets/perfume3.jpeg";
import hairmask from "../assets/hairmask.jpeg";
import { addToCart } from "./cartStorage";
import { addToWishlist } from "../components/WishlistStorage";
const products = [
  {
    id: 1,
    title: "Hydrogel Patches",
    price: "₹200.95",
    oldPrice: "₹280.00",
    image: eyemask,
    sale: true,
    isNew: false,
  },
  {
    id: 2,
    title: "Blush",
    price: "₹200.95",
    oldPrice: "₹220.00",
    image: blush,
    sale: true,
    isNew: true,
  },
  {
    id: 3,
    title: "Hair Mask",
    price: "₹200.95",
    oldPrice: "₹250.00",
    image: hairmask,
    sale: true,
    isNew: false,
  },
  {
    id: 4,
    title: "Face Wash",
    price: "₹200.95",
    oldPrice: "₹250.00",
    image: facewash,
    sale: true,
    isNew: true,
  },
  {
    id: 5,
    title: "Gloss",
    price: "₹200.95",
    oldPrice: "₹250.00",
    image: gloss,
    sale: true,
    isNew: true,
  },
  {
    id: 6,
    title: "Lipstick",
    price: "₹200.95",
    oldPrice: "₹250.00",
    image: lipstick,
    sale: true,
    isNew: false,
  },
  {
    id: 7,
    title: "Perfume1",
    price: "₹200.95",
    oldPrice: "₹250.00",
    image: perfume1,
    sale: true,
    isNew: false,
  },
  {
    id: 8,
    title: "Perfume2",
    price: "₹200.95",
    oldPrice: "₹250.00",
    image: perfume2,
    sale: true,
    isNew: true,
  },
  {
    id: 9,
    title: "Perfume3",
    price: "₹200.95",
    oldPrice: "₹250.00",
    image: perfume3,
    sale: true,
    isNew: true,
  },
];

function Products() {
  const [filterNew, setFilterNew] = useState(false);
  const [filterSale, setFilterSale] = useState(false);
  const navigate = useNavigate();
  const filteredProducts = products.filter((product) => {
    if (filterNew && !product.isNew) return false;
    if (filterSale && !product.sale) return false;
    return true;
  });

  return (
    <div className="product-page1">
      <div className="sidebar">
        <input type="text" placeholder="Search" className="search-box" />
        <div className="sidebar-section">
          <h3>Categories</h3>
          <ul>
            <li>Makeup</li>
            <li>SPA</li>
            <li>Perfumes</li>
            <li>Nails</li>
            <li>Skin care</li>
            <li>Hair care</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Price</h3>
          <input type="range" min="0" max="500" />
        </div>
        <div className="sidebar-section">
          <h3>You Have Viewed</h3>
          <ul>
            <li>Foundation BB</li>
            <li>Lotion for Cleansing</li>
            <li>Terry Mask</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Top 3 For Today</h3>
          <ul>
            <li>Spray Balm With Oat Extract</li>
            <li>Hydrogel Patches</li>
            <li>Detox Body Cream</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="filters">
          <label>
            <input
              type="checkbox"
              checked={filterNew}
              onChange={() => setFilterNew(!filterNew)}
            />
            New
          </label>
          <label style={{ marginLeft: "20px" }}>
            <input
              type="checkbox"
              checked={filterSale}
              onChange={() => setFilterSale(!filterSale)}
            />
            Sale
          </label>
        </div>

        <div className="product-grid1">
          {filteredProducts.map((product) => (
            <div
              className="product-card1"
              key={product.id}
              onClick={() =>
                product.id === 1 && navigate(`/product/${product.id}`)
              }
              style={{ cursor: "pointer" }}
            >
              <div className="label-container">
                {product.sale && <span className="sale-label1">Sale</span>}
                {product.isNew && <span className="new-label1">New</span>}
              </div>

              <div className="image-container1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image1"
                />
                <div className="overlay-icons">
                  <button
                    className="icon-btn heart-btn"
                    title="Add to Wishlist"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Item is added to Wishlist");
                      addToWishlist(product);
                    }}
                  >
                    ❤
                  </button>
                  <button
                    className="icon-btn cart-btn"
                    title="Add to Cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                      alert("Item is added to Cart");
                    }}
                  >
                    🛒
                  </button>
                </div>
              </div>

              <h4 className="product-title1">{product.title}</h4>
              <p className="old-price1">{product.oldPrice}</p>
              <p className="price1">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
