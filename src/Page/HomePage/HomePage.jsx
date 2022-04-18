import React from "react";
import AboutHomePage from "./AboutHomePage/AboutHomePage";
import "./HomePage.css";
import VisaHomePage from "./VisaHomePage/VisaHomePage";
import WorkHomePage from "./WorkHomePage/WorkHomePage";
import CountryVisa from "./CountryVisa/CountryVisa";
import GetInTouchHomePage from "./GetInTouchHomePage/GetInTouchHomePage";

const HomePage = () => {
  return (
    <div>
      <div className="bg-home-image">
        <div className="container d-flex align-items-canter ">
          <div className="mt-5 pt-5 pb-5">
            <p className="text-orange">TRAVELS IMMIGRATION & VISA</p>
            <h1 className="fw-bold home-title text-light m-0">
              The Best Way To
            </h1>
            <h1 className="fw-bold home-title text-light m-0">Success Your</h1>
            <h1 className="fw-bold home-title text-light">
              Migration And Visa{" "}
            </h1>
            <div className="mt-5">
              <p className="mb-0 text-light">
                Welcome TO Our Combo | Immigration Visa Website.We Have All Type
                Of Visa.
              </p>
              <p className="text-light">
                You Can Chose The Visa Of Your Chhoice From Our Website.{" "}
              </p>
            </div>
            <div className="orange-btn mt-5">
              <button className="btn  p-3 px-4 text-light shadow-none fw-bold">
                Discoverd More
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboutHomePage />
      <WorkHomePage />
      <VisaHomePage />
      <CountryVisa />
      <GetInTouchHomePage />
    </div>
  );
};

export default HomePage;
