import React from "react";
import "./SingleCountryVisa.css";

const SingleCountryVisa = ({ countryVisa }) => {
  const { name, img, price, description } = countryVisa;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 pt-3">
      <img className="img-fluid rounded-3" src={img} alt="" />
      <div className="countryVisa-info-title">
        <h3>{name}</h3>
        <h3 className="text-warning">${price}</h3>
        <p className="text-center">
          {description.length > 190
            ? description.slice(0, 190) + " ...Read More"
            : description}
        </p>
        <div className="country-book-btn text-center">
          <button className="btn btn-link text-decoration-none shadow-none">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryVisa;