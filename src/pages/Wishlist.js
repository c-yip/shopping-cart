import { Context } from "../Context";
import { useContext } from "react";
import useHooks from "../hooks/useHooks";
import { ProductCard } from "../components/ProductCard";

export default function Wishlist() {
  const { storeData, storeItemId, toggleFavorite, addToCart } =
    useContext(Context);
  const { heartStyle } = useHooks();

  const wishlistElements = storeData.map((item) => {
    if (item.favorite) {
      return ProductCard(
        item,
        storeItemId,
        addToCart,
        heartStyle,
        toggleFavorite
      );
    }
  });

  return (
    <div className="wishlist page">
      <h1 className="page-title">Wishlist</h1>
      <div className="wishlist-container">{wishlistElements}</div>
    </div>
  );
}
