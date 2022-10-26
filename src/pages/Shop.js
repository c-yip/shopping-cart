import React, { useContext } from "react";
import { Context } from "../Context";
import useHooks from "../hooks/useHooks";
import { ProductCard } from "../components/ProductCard";

export default function Shop() {
  const { storeData, loading, toggleFavorite, addToCart, storeItemId } =
    useContext(Context);

  console.log("Shop", storeData, "loading", loading);

  const allProducts = storeData.map((item) =>
    ProductCard(item, storeItemId, addToCart, toggleFavorite)
  );

  return (
    <div className="shop page">
      <h1 className="page-title">Shop All</h1>
      {loading && <h1>Loading . . .</h1>}
      <div className="products-container">{allProducts}</div>;
    </div>
  );
}
