import React, { useState } from "react";
import "../styles/Navigation.css";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger + close icons

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-navigation">
      <div className="secondary-nav">
        {/* Brand Name */}
        <div className="brand-container">
          <h2 className="brand-name" style={{ paddingLeft: "15px" }}>
            Beauty Bar
          </h2>
        </div>

        {/* Hamburger Icon (shows only on mobile) */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/" className="active">
            Home
          </a>
          <a href="#">Pages</a>
          <a href="/shop">Shop</a>
          <a href="/category">Categories</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Icons */}
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
