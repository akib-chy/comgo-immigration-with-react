import React from "react";
import "./WorkHomePage.css";

const WorkHomePage = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="text-center ">
        <p className="text-orange">HOW WE WORK</p>
        <h2 className="fw-bold workHome-title">Bold Approaches Expert</h2>
        <h2 className="fw-bold workHome-title">Counsel Results That Matter</h2>
      </div>
      <div className="row mt-5  pt-5">
        <div className="col-lg-3 col-md-6 col-sm-12 info">
          <h4 className="mt-4">
            <span className="workHome-into-number mt-3">01</span>
          </h4>
          <div className="work-info">
            <div className="workHome-into-title d-flex ">
              <div>
                <h4>Fill In All The</h4>
                <h4>Required Form</h4>
              </div>
              <div>
                <i className="fa-solid fa-angle-right work-right-icon"></i>
              </div>
            </div>
            <div className="workAbout-info mt-4">
              <p>Sed ut perspiciatis unde</p>
              <p>omnis iste natus error</p>
              <p>sit voluptatem</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 info">
          <h4 className="mt-4">
            <span className="workHome-into-number ">02</span>
          </h4>
          <div className="work-info">
            <div className="workHome-into-title d-flex ">
              <div>
                <h4>Submit All Your</h4>
                <h4>Attested</h4>
              </div>
              <div>
                <i className="fa-solid fa-angle-right work-right-icon"></i>
              </div>
            </div>
            <div className="workAbout-info mt-4">
              <p>Sed ut perspiciatis unde</p>
              <p>omnis iste natus error</p>
              <p>sit voluptatem</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 info">
          <h4 className="mt-4">
            <span className="workHome-into-number">03</span>
          </h4>
          <div className="work-info">
            <div className="workHome-into-title d-flex">
              <div>
                <h4>Make Payment</h4>
                <h4>For Your Visa</h4>
              </div>
              <div>
                <i className="fa-solid fa-angle-right work-right-icon"></i>
              </div>
            </div>
            <div className="workAbout-info mt-4">
              <p>Sed ut perspiciatis unde</p>
              <p>omnis iste natus error</p>
              <p>sit voluptatem</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 info">
          <h4 className="mt-4">
            <span className="workHome-into-number">04</span>
          </h4>
          <div className="work-info">
            <div className="workHome-into-title d-flex ">
              <div>
                <h4>Ready To Receive</h4>
                <h4> Your Visa</h4>
              </div>
              <div>
                <i className="fa-solid fa-angle-right work-right-icon"></i>
              </div>
            </div>
            <div className="workAbout-info mt-4">
              <p>Sed ut perspiciatis unde</p>
              <p>omnis iste natus error</p>
              <p>sit voluptatem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHomePage;
