export const addToWishlist = (product) => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const alreadyExists = wishlist.find((item) => item.id === product.id);

  if (!alreadyExists) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

export const getWishlist = () => {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
};

export const removeFromWishlist = (id) => {
  const wishlist = getWishlist();
  const updated = wishlist.filter((item) => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(updated));
};
