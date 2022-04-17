import React from "react";
import "./SingleVisa.css";

const SingleVisa = ({ visa }) => {
  const { name, img, description } = visa;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-5 pt-3">
      <img className="img-fluid" src={img} alt="" />
      <div className="text-light mt-3">
        <h3 className="fw-bold mb-4 mt-4">{name}</h3>
        <p className="">{description.slice(0, 120)}</p>
        <div className="visa-read-more-btn">
          <button className="btn btn-link text-decoration-none shadow-none">
            Read More <i className="fa-solid fa-angle-right ms-1 mt-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleVisa;
