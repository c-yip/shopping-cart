import useFetchData from "../hooks/useFetchData";
import heart from "../images/heart.png";
export default function Shop() {
  const { storeData, loading, toggleFavorite } = useFetchData();
  console.log(storeData);

  const allProducts = storeData.map((item) => (
    <div className="product-card" key={item.id}>
      <img className="product-image" src={item.image} alt={item.title} />
      <p className="product-title">{item.title}</p>
      <p className="product-price">${item.price}</p>
      <div className="product-ratings">
        <p className="product-rating">Rating: {item.rating.rate}/5</p>
        <p className="product-rating-count">({item.rating.count})</p>
      </div>
      <div className="product-buttons">
        <button className="product-button">Add to cart</button>
        <img
          className="heart-icon"
          onClick={() => toggleFavorite(item.id)}
          src={heart}
          alt="Favorite icon"
        />
      </div>
    </div>
  ));

  return (
    <div className="shop page">
      <h1 className="page-title">Shop All</h1>
      {loading && <h1>Loading . . .</h1>}
      <div className="products-container">{allProducts}</div>;
    </div>
  );
}
