import { useState, useEffect } from "react";

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
    setStoreData((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          item.favorite = !item.favorite;
        }
        return item;
      });
    });
  }

  return { storeData, loading };
}

export default useFetchData;
