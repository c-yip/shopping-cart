import React, { useContext } from "react";
import { Context } from "../Context";
import useHooks from "../hooks/useHooks";
import deleteSymbol from "../images/delete-symbol.png";

export default function Cart() {
  const { storeData, storeItemId, selectedProduct, cart } = useContext(Context);

  const { convertPrice } = useHooks();

  const cartHeading = (
    <h2 className="cart-heading">My cart ({cart.length} items)</h2>
  );

  const cartElements = cart.map((item) => {
    return (
      <div className="cart-item">
        <div className="image-container">
          <img className="cart-item-image" src={item.image} alt="product" />
        </div>
        <div className="cart-text-container">
          <h1 className="cart-title">{item.title}</h1>
          <p className="cart-item-price">{convertPrice(item.price)}</p>

          <div className="flex space-between">
            <p className="cart-item-quantity">Quantity:</p>
            <img className="delete-symbol" src={deleteSymbol} alt="delete" />
          </div>
        </div>
      </div>
    );
  });

  const cartTotal = (
    <div className="cart-total">
      <h3>Total</h3>

      <div className="total-container">
        <p>Sub-total:</p>
        <p>$45.00</p>
      </div>

      <div className="total-container">
        <p>Shipping:</p>
        <p>Free</p>
      </div>

      <div className="total-container">
        <h4>Total: </h4>
        <h4>$500.00</h4>
      </div>

      <button className="product-button">Place your order</button>
    </div>
  );
  console.log("store data from cart page", storeData);
  console.log("cart from cart page:", cart);

  return (
    <div className="cart-page">
      <div className="cart-container">
        {cartHeading}
        <div className="cart-item-container">{cartElements}</div>
      </div>

      {cartTotal}
    </div>
  );
}
