import heart from "../images/heart.png";
import shoppingCart from "../images/shopping-cart.png";

export default function Header() {
  return (
    <header>
      <h1 className="logo">Fake Store</h1>

      <nav className="nav-left">
        <h3>Shop</h3>
        <h3>Category 1</h3>
        <h3>Category 2</h3>
        <h3>Category 3</h3>
      </nav>

      <nav className="nav-right">
        <div className="nav-icon-container">
          <img src={heart} alt="Heart icon" />
          <p>Wishlist</p>
        </div>

        <div className="nav-icon-container">
          <img src={shoppingCart} alt="Shopping cart icon" />
          <p>Cart</p>
        </div>
      </nav>
    </header>
  );
}
