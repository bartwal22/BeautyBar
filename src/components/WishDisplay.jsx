import React, { useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "./WishlistStorage";
import "../styles/WishDisplay.css";

export default function WishDisplay() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    setWishlistItems(getWishlist());
  }, []);

  const handleRemove = (id) => {
    removeFromWishlist(id);
    setWishlistItems(getWishlist());
  };

  if (wishlistItems.length === 0) {
    return <div className="empty-message">Your wishlist is empty 💔</div>;
  }

  return (
    <div className="wishlist-wrapper">
      <table className="wishlist-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Add To Cart</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map((item) => (
            <tr key={item.id}>
              <td className="product-cell">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>SKU: {item.sku || "IN1203"}</p>
                </div>
              </td>
              <td>₹{item.price.replace("$", "")}</td>

              <td className={item.inStock ? "in-stock" : "not-available"}>
                {item.inStock ? "IN STOCK" : "NOT AVAILABLE"}
              </td>
              <td>
                {item.inStock ? (
                  <button className="buy-now">BUY NOW →</button>
                ) : (
                  <button className="buy-now abled" abled>
                    BUY NOW →
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="wishlist-actions">
        <button onClick={() => setWishlistItems([])} className="clear-btn">
          CLEAR WISHLIST
        </button>
        <button className="shop-btn">GO SHOPPING</button>
      </div>
    </div>
  );
}
