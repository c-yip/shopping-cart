import useFetchData from "../hooks/useFetchData";

export default function Shop() {
  const { storeData } = useFetchData();

  const allProducts = storeData.map((item) => (
    <div className="product-card" key={item.id}>
      <h3 className="product-title">{item.title}</h3>
      <p className="product-description">{item.description}</p>
      <img className="product-image" src={item.image} alt={item.title} />
      <p className="product-price">${item.price}</p>
      <div className="product-ratings">
        <p className="product-rating">Rating: {item.rating.rate}</p>
        <p className="product-rating-count">{item.rating.count}</p>
      </div>
      <div className="product-buttons">
        <button className="product-button">Add to cart</button>
        <button className="favorite-button">Add to favorites</button>
      </div>
    </div>
  ));

  return (
    <div className="shop page">
      <h1 className="shop-title">Shop All</h1>
      <div className="products-container">{allProducts}</div>;
    </div>
  );
}
