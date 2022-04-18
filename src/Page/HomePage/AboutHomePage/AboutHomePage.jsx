import React from "react";
import aboutImg1 from "../../../images/homeAbout1.jpg";
import aboutImg2 from "../../../images/homeAbout2.jpg";
import "./AboutHomePage.css";

const AboutHomePage = () => {
  return (
    <div className="container mt-5 pt-3">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <p className="text-orange ">ABOUT US</p>
          <h1
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="fw-bold about-title mb-4"
          >
            We Provide Solution To All Migration & Visa Matters
          </h1>
          <div>
            {" "}
            <p className="about-info mb-1">
              Est ante in nibh mauris cursus mattis molestie a. Tincidunt
            </p>
            <p className="about-info mb-1">
              nunc pulvinar sapien et ligula ullamcorper malesuada.
            </p>
            <p className="about-info">
              Tellus rutrum tellus pellentesque eu tincidunt tortor.
            </p>
          </div>
          <div>
            <div className="mt-5 pt-3">
              <div>
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-star aboutHome-icon"></i>
                  <h4 className="aboutHome-info fw-bold">Accurate Guidance</h4>
                </div>
                <p className="about-info mb-1 ms-5 ps-4">
                  We Do Our Best to Serve You. And We Try To{" "}
                </p>
                <p className="about-info ms-5 ps-4">
                  Meet Customer Expectations.
                </p>
              </div>
              <div className="mt-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-thumbs-up aboutHome-icon"></i>
                  <h4 className="aboutHome-info fw-bold">Our Presence</h4>
                </div>
                <p className="about-info mb-1 ms-5 ps-4">
                  We Are Trying To Gradually InterGrate All{" "}
                </p>
                <p className="about-info ms-5 ps-4">Countries in The Visa.</p>
              </div>
              <div className="orange-btn mt-5">
                <button className="btn orange-btn p-3 px-4 text-light shadow-none fw-bold mb-4">
                  More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="mb-4">
            <img
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="img-fluid rounded-3"
              src={aboutImg1}
              alt=""
            />
          </div>
          <div>
            <img
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="img-fluid rounded-3"
              src={aboutImg2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHomePage;
