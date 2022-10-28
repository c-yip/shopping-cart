import { Link } from "react-router-dom";
import { useContext } from "react";
import heart from "../images/heart.png";
import shoppingCart from "../images/shopping-cart.png";
import { Context } from "../Context";

export default function Header() {
  const { cart } = useContext(Context);

  const cartAmount = function () {
    const quantity = [];
    cart.map((item) => quantity.push(item.quantity));
    return quantity.reduce((partialSum, a) => partialSum + a, 0);
  };

  return (
    <header>
      <Link to="/">
        <h1 className="logo outline-on-hover">Fake Store</h1>
      </Link>

      {/* these will all be links to categories */}
      <nav className="nav-left">
        <Link to="/shop">
          <h3 className="outline-on-hover nav-link">Shop</h3>
        </Link>
        <Link to="/clothing">
          <h3 className="outline-on-hover nav-link">Clothing</h3>
        </Link>
        <Link to="/jewelry">
          <h3 className="outline-on-hover nav-link">Jewelry</h3>
        </Link>
        <Link to="/electronics">
          <h3 className="outline-on-hover nav-link">Electronics</h3>
        </Link>
      </nav>

      <nav className="nav-right">
        <Link to="/wishlist">
          <div className="nav-icon-container outline-on-hover">
            <img src={heart} alt="Heart icon" />
            <p>Wishlist</p>
          </div>
        </Link>

        <Link to="/cart">
          <div className="nav-icon-container outline-on-hover">
            {cart.length > 0 && (
              <span class="badge badge-warning">{cartAmount()}</span>
            )}
            <img src={shoppingCart} alt="Shopping cart icon" />
            <p>Cart</p>
          </div>
        </Link>
      </nav>
    </header>
  );
}
