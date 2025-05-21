import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateQuantity } from "./cartStorage";
import "../styles/CartSummary.css";
const CartSummary = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(getCartItems());
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    updateQuantity(id, newQuantity);
    setCartItems(getCartItems());
  };

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="summary-box" style={{ maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Cart Summary</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="summary-row"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
                gap: "15px",
                borderBottom: "1px solid #eee",
                paddingBottom: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                  {item.title}
                </div>
                <div style={{ color: "#666", fontSize: "0.9rem" }}>
                  {item.price}
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      backgroundColor: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val)) handleQuantityChange(item.id, val);
                    }}
                    style={{
                      width: "40px",
                      textAlign: "center",
                      fontSize: "1rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      backgroundColor: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "red",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                aria-label={`Remove ${item.title}`}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      <hr style={{ margin: "20px 0" }} />

      <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        className="checkout-btn"
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#111",
          color: "white",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default CartSummary;
