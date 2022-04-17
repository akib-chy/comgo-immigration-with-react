import React, { useEffect, useState } from "react";
import SingleVisa from "./SingleVisa/SingleVisa";
import "./VisaHomePage.css";

const VisaHomePage = () => {
  const [allVisa, setAllVisa] = useState();
  useEffect(() => {
    fetch("visa.json")
      .then((res) => res.json())
      .then((data) => setAllVisa(data));
  }, []);

  return (
    <div className="mt-5 pt-5 visa-container">
      <div className="container ">
        <div className="text-center ">
          <p className="text-orange">HOW WE WORK</p>
          <h2 className="fw-bold workHome-title text-light">
            Bold Approaches Expert
          </h2>
          <h2 className="fw-bold workHome-title text-light">
            Counsel Results That Matter
          </h2>
        </div>
        <div className="row">
          {allVisa?.map((visa) => (
            <SingleVisa visa={visa} key={visa.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaHomePage;
