import { Link } from "react-router-dom";
import React, { useContext } from "react";
import heroImage from "../images/woman-shopping-for-clothes.jpg";
import couch from "../images/couch.jpg";
import shoppingCart from "../images/shopping-cart.jpg";
import { Context } from "../Context";

export default function Home() {
  const { storeData, loading } = useContext(Context);
  console.log("Home", storeData, "loading", loading);

  return (
    <div className="page home">
      <section className="hero-section">
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
      </section>

      <section className="featured-items-section">
        <h1 className="category-title">Featured Items</h1>
        {!loading ? (
          <div className="featured-items categories">
            <div
              className="category-item"
              style={{
                backgroundImage: `url(${storeData[1].image})`,
              }}
            >
              <div className="category-item-inner">
                <div>{!loading && storeData[1].title}</div>
              </div>
            </div>
            <div
              className="category-item"
              style={{
                backgroundImage: `url(${storeData[5].image})`,
              }}
            >
              <div className="category-item-inner">
                <div>{!loading && storeData[5].title}</div>
              </div>
            </div>
            <div
              className="category-item"
              style={{
                backgroundImage: `url(${storeData[19].image})`,
              }}
            >
              <div className="category-item-inner">
                <div>{!loading && storeData[19].title}</div>
              </div>
            </div>
            <div
              className="category-item"
              style={{
                backgroundImage: `url(${storeData[12].image})`,
              }}
            >
              <div className="category-item-inner">
                <div>{!loading && storeData[12].title}</div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading . . . </h1>
        )}
      </section>

      <div className="about-section">
        <div className="description1">
          <img src={couch} alt="image" />
          <div>
            <h2>What is Fake Store?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl,
              nec aliquet nisl nis.
            </p>
          </div>
        </div>

        <div className="description2">
          <div>
            <h2>Save money with our fake stuff!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl,
              nec aliquet nisl nis.
            </p>
          </div>
          <img src={shoppingCart} alt="image" />
        </div>
      </div>

      <section className="contact-section">
        <h2>Contact us</h2>
        <div className="contact">
          <div className="contact-info">
            <p>Phone: 123-456-7890</p>
            <p>Email: fake@fakestore.com,</p>
            <p>Address: 123 Fake Street, Fake City, Fake State, 12345</p>
          </div>
        </div>
      </section>
    </div>
  );
}
