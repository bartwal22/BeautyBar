import React from "react";
import "../styles/Navigation.css";
import { FcCloseUpMode } from "react-icons/fc";

export default function Navigation() {
  return (
    <div className="main-navigation">
      {/* Second Navigation Bar */}
      <div className="secondary-nav">
        <div className="brand-container">
          <h2 className="brand-name" style={{ paddingLeft: "15px" }}>
            Beauty Bar
          </h2>
        </div>
        <nav className="nav-links">
          <a href="/" className="active">
            Home
          </a>
          <a href="#">Pages</a>
          <a href="/shop">Shop</a>
          <a href="/category">Categories</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="nav-icons">
          <a href="#">
            <span>🔍</span>
          </a>
          <a href="#">
            <span>👤</span>
          </a>
          <a href="/wishlist">
            <span>💖</span>
          </a>
          <a href="/cart">
            <span>🛒</span>
          </a>
        </div>
      </div>
    </div>
  );
}
