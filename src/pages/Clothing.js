import React, { useContext } from "react";
import { Context } from "../Context";
import { ProductCard } from "../components/ProductCard";

export default function Clothing() {
  const { storeData, loading, toggleFavorite, addToCart, storeItemId } =
    useContext(Context);

  const clothingElements = storeData.map((item) => {
    if (
      item.category === "men's clothing" ||
      item.category === "women's clothing"
    ) {
      return ProductCard(item, storeItemId, addToCart, toggleFavorite);
    }
  });

  return (
    <div className="clothing page">
      <h1 className="page-title">Clothing</h1>
      <div className="products-container">{clothingElements}</div>
    </div>
  );
}
