import useFetchData from "../hooks/useFetchData";
import heart from "../images/heart.png";
export default function Shop() {
  const { storeData } = useFetchData();

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
        <img className="heart-icon" src={heart} alt="Favorite icon" />
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
