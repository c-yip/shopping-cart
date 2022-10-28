import { Link } from "react-router-dom";
import React, { useContext } from "react";
import heroImage from "../images/woman-shopping-for-clothes.jpg";
import couch from "../images/couch.jpg";
import shoppingCart from "../images/shopping-cart.jpg";
import { Context } from "../Context";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export default function Home() {
  const { storeData, storeItemId, loading } = useContext(Context);
  console.log(storeData);
  !loading && console.log(storeData[0].id);

  return (
    <div className="page home">
      <section className="hero-section">
        <img
          src={heroImage}
          alt="Woman shopping"
          className="background-image"
        />
        <div className="hero overlay">
          <h1 className="hero-text">Fake items straight to your doorstep</h1>
          <h3 className="hero-sub-text">
            Fulfill your fake items needs from the comfort of your home
          </h3>
          <Link to="/shop">
            <button className="shop-button">Shop Now</button>
          </Link>
        </div>
      </section>

      <section className="featured-items-section">
        <h1 className="category-title">Featured Items</h1>
        {!loading && (
          <CCarousel controls indicators>
            <CCarouselItem>
              <Link to="/productdetails">
                <CImage
                  className="d-block w-100"
                  src={storeData[0].image}
                  alt="slide 1"
                  onClick={() => storeItemId(storeData[0].id)}
                />
              </Link>
            </CCarouselItem>

            <CCarouselItem>
              <Link to="/productdetails">
                <CImage
                  className="d-block w-100"
                  src={storeData[12].image}
                  alt="slide 2"
                  onClick={() => storeItemId(storeData[12].id)}
                />
              </Link>
            </CCarouselItem>
            <CCarouselItem>
              <Link to="/productdetails">
                <CImage
                  className="d-block w-100"
                  src={storeData[19].image}
                  alt="slide 3"
                  onClick={() => storeItemId(storeData[19].id)}
                />
              </Link>
            </CCarouselItem>
          </CCarousel>
        )}
      </section>

      <div className="about-section">
        <div className="description1">
          <img src={couch} alt="shopping on couch" />
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
