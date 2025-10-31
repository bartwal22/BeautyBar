import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import ShopPage from "./components/ShopPage";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ImageGallery />
      <Footer />
    </Router>
  );
}

export default App;
