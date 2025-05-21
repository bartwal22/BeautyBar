import React from "react";
import "../styles/ShopHeader.css";
export default function ShopHeader() {
  return (
    <div className="shop-header">
      <div className="shop-overlay">
        <h1 className="shop-title">Shop</h1>
        <p className="shop-breadcrumb">
          Home &nbsp; - &nbsp; <span>Shop</span>
        </p>
      </div>
    </div>
  );
}
