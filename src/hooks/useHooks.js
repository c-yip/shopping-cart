import heart from "../images/heart.png";
import heartOutline from "../images/heart-outline.png";

function useFetchData() {
  function heartStyle(favorite) {
    if (favorite) {
      return heart;
    } else {
      return heartOutline;
    }
  }

  return { heartStyle };
}

export default useFetchData;
