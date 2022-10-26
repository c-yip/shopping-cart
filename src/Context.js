import React, { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Context = createContext();

function ContextProvider({ children }) {
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setStoreData(() => {
          return (
            data,
            data.map((item) => {
              item.id = nanoid();
              item.favorite = false;
              return item;
            })
          );
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  function toggleFavorite(id) {
    setStoreData((prev) =>
      prev.map((item) => {
        return item.id === id
          ? {
              ...item,
              favorite: !item.favorite,
            }
          : item;
      })
    );
  }

  function addToCart(item) {
    setCart((prev) => {
      return [...prev, item];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.cartId !== id));
  }

  function storeItemId(id) {
    setSelectedProduct(id);
  }

  return (
    <Context.Provider
      value={{
        storeData,
        loading,
        toggleFavorite,
        addToCart,
        storeItemId,
        selectedProduct,
        cart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
