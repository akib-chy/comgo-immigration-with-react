import React from "react";
import "./Testimonial.css";
import Clint1 from "../../../images/clint1.jpg";
import Clint2 from "../../../images/clint2.jpg";
import Clint3 from "../../../images/clint3.jpg";
const Testimonial = () => {
  return (
    <div className="container my-5 py-5">
      <div className="countryVisa-title">
        <p className="text-warning">TESTIMONIAL</p>
        <h2
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1200"
        >
          What Says Our Happy
        </h2>
        <h2
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1200"
        >
          Costumer
        </h2>
      </div>
      <div className="row py-5">
        <div
          className="col-lg-4 "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="card-1 testimonial-card p-4 py-5 mt-3">
            <div className="p-4">
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="px-4">
              <p>
                Parturient montes nascetur ridiculus mus mauris. Purus ut
                faucibus pulvinar elementum integer enim sed faucibus turpis in
                eu.
              </p>
              <div className="d-flex align-items-center">
                <img src={Clint1} alt="" />
                <div className="card-name ms-4 py-4">
                  <h5>ALEX BOLD</h5>
                  <h6>Customers</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1300"
        >
          <div className="card-2 testimonial-card p-4 py-5 mt-3">
            <div className="p-4">
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="px-4">
              <p>
                Parturient montes nascetur ridiculus mus mauris. Purus ut
                faucibus pulvinar elementum integer enim sed faucibus turpis in
                eu.
              </p>
              <div className="d-flex align-items-center">
                <img src={Clint2} alt="" />
                <div className="card-name ms-4 py-4">
                  <h5>ROBERT GRAY</h5>
                  <h6>Customers</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-8 col-sm-12"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1600"
        >
          <div className="card-3 testimonial-card p-4 py-5 mt-3">
            <div className="p-4">
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="px-4">
              <p>
                Parturient montes nascetur ridiculus mus mauris. Purus ut
                faucibus pulvinar elementum integer enim sed faucibus turpis in
                eu.
              </p>
              <div className="d-flex align-items-center">
                <img src={Clint3} alt="" />
                <div className="card-name ms-4 py-4">
                  <h5>CLARA LOFT</h5>
                  <h6>Customers</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
