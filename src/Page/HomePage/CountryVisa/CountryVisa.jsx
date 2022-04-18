import React, { useEffect, useState } from "react";
import "./CountryVisa.css";
import SingleCountryVisa from "./SingleCountryVisa/SingleCountryVisa";

const CountryVisa = () => {
  const [countriesVisa, setCountriesVisa] = useState();
  useEffect(() => {
    fetch("CountryVisa.json")
      .then((res) => res.json())
      .then((data) => setCountriesVisa(data));
  }, []);
  return (
    <div className="mt-5 pt-5 mb-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p className="text-orange">Our Services</p>
            <div className="countryVisa-title">
              <h2
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
              >
                The Most Favourite Country
              </h2>
              <h2
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
              >
                For The Immigration
              </h2>
              <p className="mt-4">
                We Have Visa For All Countries. You Can Choose The Visa Of Your
                Choice And Visit Country.
              </p>
              <p>Below Are The Names Of Some Popular Countries</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="orange-btn mt-5 pt-4">
              <button className="btn p-3 px-4 text-light shadow-none fw-bold">
                View All Countries
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-2">
          {countriesVisa?.map((countryVisa) => (
            <SingleCountryVisa key={countryVisa.id} countryVisa={countryVisa} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryVisa;
