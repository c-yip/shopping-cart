import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import useHooks from "../hooks/useHooks";
import deleteSymbol from "../images/delete-symbol.png";

export default function Cart() {
  const { storeItemId, cart, removeFromCart, addQuantity, subtractQuantity } =
    useContext(Context);

  const { convertPrice } = useHooks();

  const [sum, setSum] = useState();

  useEffect(() => {
    const price = cart.map((item) => {
      return item.price * item.quantity;
    });

    const sum = price.reduce((accumulator, num) => {
      return accumulator + num;
    }, 0);
    setSum(sum);
  }, [cart]);

  const cartHeading = <h2 className="cart-heading">My Cart</h2>;

  const cartElements = cart.map((item) => {
    return (
      <div className="cart-item">
        <div className="image-container">
          <Link to="/productdetails">
            <img
              className="cart-item-image"
              src={item.image}
              alt="product"
              onClick={storeItemId(item.id)}
            />
          </Link>
        </div>
        <div className="cart-text-container">
          <h1 className="cart-title">{item.title}</h1>
          <p className="cart-item-price">{convertPrice(item.price)}</p>

          <div className="flex space-between">
            <p className="cart-item-quantity">Quantity: {item.quantity}</p>

            <div className="addSubtract">
              <button className="addBtn" onClick={() => addQuantity(item.id)}>
                +
              </button>
              <button
                className="subBtn"
                onClick={() => subtractQuantity(item.id)}
              >
                -
              </button>
            </div>

            <img
              className="delete-symbol"
              src={deleteSymbol}
              alt="delete"
              onClick={() => removeFromCart(item.id)}
            />
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
        <p>{sum ? convertPrice(sum) : ""}</p>
      </div>

      <div className="total-container">
        <p>Shipping:</p>
        <p>Free</p>
      </div>

      <div className="total-container">
        <h4>Total: </h4>
        <h4>{sum ? convertPrice(sum) : ""}</h4>
      </div>

      <button className="product-button">Place your order</button>
    </div>
  );

  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <div className="cart-container">
          {cartHeading}
          <div className="cart-item-container">{cartElements}</div>
        </div>
      )}
      {cartTotal}
    </div>
  );
}
