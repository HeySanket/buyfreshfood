import React from "react";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "86vh" }}>
            <img
              style={{ height: "100%" }}
              className="d-block w-100"
              src="https://greenoyard.com/wp-content/uploads/2022/03/greenoyard-next-day-delivery-1024x364.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item" style={{ height: "86vh" }}>
            <img
              style={{ height: "100%" }}
              className="d-block w-100"
              src="https://www.farmersfz.com/assets/v4/assets/safe-food/img-banner.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item" style={{ height: "86vh" }}>
            <img
              style={{ height: "100%" }}
              className="d-block w-100"
              src="https://skmandi.com/wp-content/uploads/2021/07/5.jpg"
              alt="First slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
