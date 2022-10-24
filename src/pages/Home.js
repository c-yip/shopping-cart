import { Link } from "react-router-dom";
import heroImage from "../images/woman-shopping-for-clothes.jpg";
import useFetchData from "../hooks/useFetchData";

export default function Home() {
  const { storeData, loading } = useFetchData();

  let featuredPics = [];
  if (!loading) {
    featuredPics.push(
      storeData[0].image,
      storeData[5].image,
      storeData[11].image,
      storeData[19].image
    );
  }

  return (
    <div className="page home">
      <div className="hero-section">
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

      <div className="featured-items categories">
        <div
          className="category-item"
          style={{
            backgroundImage: `url(${featuredPics[0]})`,
          }}
        ></div>
        <div
          className="category-item"
          style={{
            backgroundImage: `url(${featuredPics[1]})`,
          }}
        ></div>
        <div
          className="category-item"
          style={{
            backgroundImage: `url(${featuredPics[2]})`,
          }}
        ></div>
        <div
          className="category-item"
          style={{
            backgroundImage: `url(${featuredPics[3]})`,
          }}
        >
          {" "}
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
