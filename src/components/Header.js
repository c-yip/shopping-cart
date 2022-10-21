import { Link } from "react-router-dom";
import heart from "../images/heart.png";
import shoppingCart from "../images/shopping-cart.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="logo">Fake Store</h1>
      </Link>

      {/* these will all be links to categories */}
      <nav className="nav-left">
        <h3>Shop</h3>
        <h3>Clothing</h3>
        <h3>Jewelry</h3>
        <h3>Electronics</h3>
      </nav>

      <nav className="nav-right">
        <Link to="/wishlist">
          <div className="nav-icon-container">
            <img src={heart} alt="Heart icon" />
            <p>Wishlist</p>
          </div>
        </Link>

        <Link to="/cart">
          <div className="nav-icon-container">
            <img src={shoppingCart} alt="Shopping cart icon" />
            <p>Cart</p>
          </div>
        </Link>
      </nav>
    </header>
  );
}
