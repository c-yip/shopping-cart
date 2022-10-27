import React, { useContext } from "react";
import { Context } from "../Context";
import { ProductCard } from "../components/ProductCard";

export default function Electronics() {
  const { storeData, loading, toggleFavorite, addToCart, storeItemId } =
    useContext(Context);

  const electronicElements = storeData.map((item) => {
    if (item.category === "electronics") {
      return ProductCard(item, storeItemId, addToCart, toggleFavorite);
    }
  });

  return (
    <div className="electronics page">
      {loading && <h1 className="page-title">Loading . . .</h1>}
      <h1 className="page-title">Electronics</h1>
      <div className="products-container">{electronicElements}</div>
    </div>
  );
}
