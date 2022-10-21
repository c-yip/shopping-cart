import { useState, useEffect } from "react";

function useFetchData() {
  const [storeData, setStoreData] = useState([]);

  // fetch data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
        setStoreData(() => {
          console.log("pure data", data);
          return data;
          // hard to call data
          // return {
          //   clothes: {
          //     men: data.filter((item) => item.category === "men's clothing"),
          //     women: data.filter(
          //       (item) => item.category === "women's clothing"
          //     ),
          //   },
          //   jewelry: data.filter((item) => item.category === "jewelery"),
          //   electronics: data.filter((item) => item.category === "electronics"),
          // };
        })
      );
  }, []);

  return { storeData };
}

export default useFetchData;
