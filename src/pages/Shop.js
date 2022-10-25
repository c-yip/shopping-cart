import React, { useContext } from "react";
import { Context } from "../Context";
import useHooks from "../hooks/useHooks";
import { ProductCard } from "./ProductCard";

export default function Shop() {
  const { storeData, loading, toggleFavorite, addToCart, storeItemId } =
    useContext(Context);
  const { heartStyle } = useHooks();

  console.log("Shop", storeData, "loading", loading);

  const allProducts = storeData.map((item) =>
    ProductCard(item, storeItemId, addToCart, heartStyle, toggleFavorite)
  );

  return (
    <div className="shop page">
      <h1 className="page-title">Shop All</h1>
      {loading && <h1>Loading . . .</h1>}
      <div className="products-container">{allProducts}</div>;
    </div>
  );
}
