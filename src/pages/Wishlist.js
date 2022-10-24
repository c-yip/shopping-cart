import useFetchData from "../hooks/useFetchData";

export default function Wishlist() {
  const { storeData, loading, toggleFavorite, heartStyle } = useFetchData();

  return (
    <div className="wishlist page">
      <h1>Wishlist</h1>
      <div>the wishlist</div>
    </div>
  );
}
