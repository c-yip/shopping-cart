import React, { useContext } from "react";
import { Context } from "../Context";
import { ProductCard } from "../components/ProductCard";

export default function Jewelry() {
  const { storeData, loading, toggleFavorite, addToCart, storeItemId } =
    useContext(Context);

  const jewelryElements = storeData.map((item) => {
    if (item.category === "jewelery") {
      return ProductCard(item, storeItemId, addToCart, toggleFavorite);
    }
  });

  return (
    <div className="jewelry page">
      <h1 className="page-title">Jewelry</h1>
      <div className="products-container">{jewelryElements}</div>
    </div>
  );
}
