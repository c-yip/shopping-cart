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
          <h3>Fulfill your fake items needs from the comfort of your home</h3>
          <Link to="/shop">
            <button className="shop-button">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="section2">
        <h2>Featured items</h2>
        <div className="featured-items">
          {/* four item cards */}
          <div className="item-card">
            <p>item goes here</p>
            <p>item goes here</p>
            <p>item goes here</p>
            <p>item goes here</p>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="description1">
          <img src="" alt="image" />
          <h2>What is Fake Store?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
            aliquet nisl nis.
          </p>
        </div>

        <div className="description2">
          <h2>Explore our fake stuff</h2>
          <img src="" alt="image" />
        </div>
      </div>

      <div className="section4">
        <h2>Contact us</h2>
        <div className="contact">
          <div className="contact-info">
            <p>Phone: 123-456-7890</p>
            <p>Email: fake@fakestore.com,</p>
            <p>Address: 123 Fake Street, Fake City, Fake State, 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
}
