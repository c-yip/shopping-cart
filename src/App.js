import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Clothing from "./pages/Clothing";
import Jewelry from "./pages/Jewelry";
import Electronics from "./pages/Electronics";

function App() {
  return (
    <div className="App font-link">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="*" element={<h1>404: Page not found</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
