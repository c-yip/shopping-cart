import React from "react";
import { Link } from "react-router-dom";

export function ProductCard(
  item,
  storeItemId,
  addToCart,
  heartStyle,
  toggleFavorite
) {
  return (
    <div className="product-card" key={item.id}>
      <Link to="/productdetails">
        <img
          className="product-image"
          src={item.image}
          alt={item.title}
          onClick={() => storeItemId(item.id)}
        />
      </Link>

      <p className="product-title">{item.title}</p>
      <p className="product-price">${item.price}</p>
      <div className="product-ratings">
        <p className="product-rating">Rating: {item.rating.rate}/5</p>
        <p className="product-rating-count">({item.rating.count})</p>
      </div>
      <div className="product-buttons">
        <button className="product-button" onClick={() => addToCart(item)}>
          Add to cart
        </button>
        <img
          src={heartStyle(item.favorite)}
          alt="heart icon"
          onClick={() => toggleFavorite(item.id)}
          className="heart-icon"
        />
      </div>
    </div>
  );
}
