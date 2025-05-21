export const getCartItems = () => {
  const data = localStorage.getItem("cartItems");
  return data ? JSON.parse(data) : [];
};

export const addToCart = (product) => {
  const currentCart = getCartItems();
  const index = currentCart.findIndex((item) => item.id === product.id);

  if (index === -1) {
    currentCart.push({ ...product, quantity: 1 });
  } else {
    currentCart[index].quantity += 1;
  }

  localStorage.setItem("cartItems", JSON.stringify(currentCart));
};

export const removeFromCart = (productId) => {
  const currentCart = getCartItems();
  const updatedCart = currentCart.filter((item) => item.id !== productId);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
};

export const updateQuantity = (productId, quantity) => {
  const currentCart = getCartItems();
  const index = currentCart.findIndex((item) => item.id === productId);

  if (index !== -1) {
    currentCart[index].quantity = quantity > 0 ? quantity : 1; // min 1
    localStorage.setItem("cartItems", JSON.stringify(currentCart));
  }
};
