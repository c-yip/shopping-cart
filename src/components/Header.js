import { Link } from "react-router-dom";
import heart from "../images/heart.png";
import shoppingCart from "../images/shopping-cart.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="logo outline-on-hover">Fake Store</h1>
      </Link>

      {/* these will all be links to categories */}
      <nav className="nav-left">
        <Link to="/shop">
          <h3 className="outline-on-hover">Shop</h3>
        </Link>
        <Link to="/clothing">
          <h3 className="outline-on-hover">Clothing</h3>
        </Link>
        <Link to="/jewelry">
          <h3 className="outline-on-hover">Jewelry</h3>
        </Link>
        <Link to="/electronics">
          <h3 className="outline-on-hover">Electronics</h3>
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
            <img src={shoppingCart} alt="Shopping cart icon" />
            <p>Cart</p>
          </div>
        </Link>
      </nav>
    </header>
  );
}
