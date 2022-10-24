import { useState, useEffect } from "react";
import heart from "../images/heart.png";
import heartOutline from "../images/heart-outline.png";

function useFetchData() {
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setStoreData(() => {
          return (
            data,
            data.map((item) => {
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

  function heartStyle(favorite) {
    if (favorite) {
      return heart;
    } else {
      return heartOutline;
    }
  }

  return { storeData, loading, toggleFavorite, heartStyle };
}

export default useFetchData;
