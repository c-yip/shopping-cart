import React, { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Context = createContext();

function ContextProvider({ children }) {
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

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
      item.cartId = nanoid();
      return [...prev, item];
    });
  }

  console.log(storeData);

  return (
    <Context.Provider value={{ storeData, loading, toggleFavorite, addToCart }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
