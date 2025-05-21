import React from "react";
import "../styles/CatHeader.css";

export default function CatHeader() {
  return (
    <div className="cat-header">
      <div className="cat-overlay">
        <h1 className="cat-title">Categories</h1>
        <p className="cat-breadcrumb">
          Home &nbsp; - &nbsp; <span>Categories</span>
        </p>
      </div>
    </div>
  );
}
