import React, { useEffect, useState } from "react";
import "./CountryVisa.css";
import SingleCountryVisa from "./SingleCountryVisa/SingleCountryVisa";

const CountryVisa = () => {
  const [countryesVisa, setCountryesVisa] = useState();
  useEffect(() => {
    fetch("CountryVisa.json")
      .then((res) => res.json())
      .then((data) => setCountryesVisa(data));
  }, []);
  return (
    <div className="mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p className="text-orange">FAVOURITE DESTINATION</p>
            <div className="countryVisa-title">
              <h2>The Most Favourite Country</h2>
              <h2>For The Immigration</h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <p>incididunt ut labore et dolore magna aliqua.</p>
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
          {countryesVisa?.map((countryVisa) => (
            <SingleCountryVisa key={countryVisa.id} countryVisa={countryVisa} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryVisa;
