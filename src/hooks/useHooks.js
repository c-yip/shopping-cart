import heart from "../images/heart.png";
import heartOutline from "../images/heart-outline.png";

function useHooks() {
  function heartStyle(favorite) {
    if (favorite) {
      return heart;
    } else {
      return heartOutline;
    }
  }

  function convertPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return { heartStyle, convertPrice };
}

export default useHooks;
