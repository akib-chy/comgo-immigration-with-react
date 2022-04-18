import React from "react";
import "./GetInTouchHomePage.css";

const GetInTouchHomePage = () => {
  return (
    <div>
      <div className="bg-getIntouch-image">
        <div className="container d-flex align-items-canter ">
          <div className="mt-5 pt-5 pb-5">
            <p className="text-orange">GET IN TOUCH WITH US</p>
            <h1 className="fw-bold getIntouch-title text-light m-0">
              Looking For The Best Visa
            </h1>
            <h1 className="fw-bold getIntouch-title text-light m-0">
              Consulting?
            </h1>
            <div className="mt-5">
              <p className="mb-0 text-light">
                You Select The Visa Of Your Choice And Send It To Us And Let Us
                Know If You
              </p>
              <p className="text-light">Have A Case For Booking A Visa. </p>
            </div>
            <div className="orange-btn mt-5">
              <button className="btn  p-3 px-4 text-light shadow-none fw-bold">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchHomePage;
