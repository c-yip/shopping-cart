import { Link } from "react-router-dom";
import heroImage from "../images/woman-shopping-for-clothes.jpg";

export default function Home() {
  return (
    <div className="page home">
      <div className="section1">
        <img
          src={heroImage}
          alt="Woman shopping"
          className="background-image"
        />
        <div className="hero overlay">
          <h1>Fake items straight to your doorstep</h1>
          <h3>
            Take care of your fake items needs from the comfort of your home
          </h3>
          <Link to="/shop">
            <div className="shop-button">Shop Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
