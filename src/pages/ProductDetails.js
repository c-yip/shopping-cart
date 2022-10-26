import { useContext } from "react";
import { Context } from "../Context";
import useHooks from "../hooks/useHooks";

export default function ProductDetails() {
  const {
    storeData,
    loading,
    toggleFavorite,
    addToCart,
    storeItemId,
    selectedProduct,
  } = useContext(Context);

  const { heartStyle, convertPrice } = useHooks();

  // select product from selectedProduct
  const product = storeData.filter((item) => item.id === selectedProduct)[0];
  console.log("product", product);

  // product details page elements
  const productDetailsElements = (
    <div className="product-detail-container">
      <div className="image-container">
        <img
          className="product-detail-image"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="item-detail-text">
        <div className="item-detail-text-container">
          <h1 className="item-detail-title">{product.title}</h1>
          <p className="product-detail-category">{product.category}</p>
        </div>

        <div className="product-ratings">
          <p>Rating: {product.rating.rate}/5</p>
          <p className="product-rating-count">({product.rating.count})</p>
        </div>
        <p className="product-detail-price">{convertPrice(product.price)}</p>
        <p className="product-detail-description">{product.description}</p>

        <div className="product-buttons">
          <button className="product-button" onClick={() => addToCart(product)}>
            Add to cart
          </button>
          <img
            src={heartStyle(product.favorite)}
            alt="heart icon"
            onClick={() => toggleFavorite(product.id)}
            className="heart-icon"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="product-details">
      {loading && <h1>loading . . .</h1>}
      {productDetailsElements}
    </div>
  );
}
