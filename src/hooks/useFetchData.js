import { useState, useEffect } from "react";

function useFetchData() {
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setStoreData(() => data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return { storeData, loading };
}

export default useFetchData;
