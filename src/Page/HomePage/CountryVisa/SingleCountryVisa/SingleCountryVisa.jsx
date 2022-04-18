import React from "react";
import { Link } from "react-router-dom";
import "./SingleCountryVisa.css";

const SingleCountryVisa = ({ countryVisa }) => {
  const { name, img, price, description } = countryVisa;
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      data-aos="fade-up-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1200"
      className="col-lg-4 col-md-6 col-sm-12 mt-5 pt-3"
    >
      <img className="img-fluid rounded-3" src={img} alt="" />
      <div className="countryVisa-info-title">
        <h3>{name}</h3>
        <h3 className="text-warning">${price}</h3>
        <p className="text-center">
          {description.length > 190
            ? description.slice(0, 190) + " ...Read More"
            : description}
        </p>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="country-book-btn text-center"
        >
          <Link to="/shipping">
            <button
              onClick={handleScrollTop}
              className="btn btn-link text-decoration-none shadow-none"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryVisa;
