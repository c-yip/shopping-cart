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
    // if duplicate item is added, increase quantity
    const duplicateItem = cart.find((cartItem) => cartItem.id === item.id);
    if (duplicateItem) {
      duplicateItem.quantity++;
      setCart([...cart]);
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function addQuantity(id) {
    setCart((prev) =>
      prev.map((item) => {
        return item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      })
    );
  }

  function subtractQuantity(id) {
    setCart((prev) =>
      prev.map((item) => {
        return item.id === id && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item;
      })
    );
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
        removeFromCart,
        addQuantity,
        subtractQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
