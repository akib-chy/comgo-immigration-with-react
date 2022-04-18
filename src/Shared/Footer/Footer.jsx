import React from "react";
import "./Footer.css";
import logo from "../../images/Logo-Comgo.png";

const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <footer className="footer-section pt-5 ">
      <div className="container  pt-5  pb-5">
        <div className="text-center">
          <img className="img-fluid" src={logo} alt="" />
          <div className="text-light">
            <p className="mb-1 mt-4">
              Thanks You So Much For Visiting Combo Immigration VisA Website
            </p>
            <p>ullamcorper odio vitae eleifend ultricies lectus</p>
            <div className="footer-icons mt-5 ">
              <a href="/#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="/#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="my-5">
            <hr className="text-light" />
          </div>
        </div>
        <div className="row footer-info">
          <div className="col-lg-2 mt-5">
            <h4 className="text-light fw-bold">Services</h4>
            <div className="mt-3">
              <a href="/#">Worker Visa</a>
            </div>
            <div className="mt-3">
              <a href="/#">Worker Visa</a>
            </div>
            <div className="mt-3">
              <a href="/#">Worker Visa</a>
            </div>
            <div className="mt-3">
              <a href="/#">Worker Visa</a>
            </div>
          </div>
          <div className="col-lg-3 mt-5">
            <h4 className="text-light fw-bold">Important Links</h4>
            <div className="mt-3">
              <a href="/#">About</a>
            </div>
            <div className="mt-3">
              <a href="/#">Coaching</a>
            </div>
            <div className="mt-3">
              <a href="/#">Visa</a>
            </div>
            <div className="mt-3">
              <a href="/#">Pricing</a>
            </div>
          </div>
          <div className="col-lg-3 mt-5">
            <h4 className="text-light fw-bold">Contact</h4>
            <div className="text-light d-flex align-items-center">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <p>Marolien Street, no 14, 2nd floor</p>
            </div>
            <div className="text-light d-flex align-items-center">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <p>+62 820 1212 5050</p>
            </div>
            <div className="text-light d-flex align-items-center">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <p>comgo@example.com</p>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <h4 className="text-light fw-bold">Subscribe Our Newslatter</h4>
            <div>
              <p className="mb-1">Please Subscribe Our Newslatter,</p>
              <p>consectetur adipiscing elit. </p>
              <div className="footer-form">
                <input type="email" placeholder="Your Email" />
                <button className="btn shadow-none" type="submit">
                  <i className="fa-solid fa-angle-right ms-1 mt-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center  mt-1 mb-0 pb-4 footer-copyright ">
        Copyright &copy; {year} Combo Immigration | Designg-By :{" "}
        <a href="https://www.facebook.com/Minhajul69" target="_blank">
          AKIB
        </a>
      </p>
    </footer>
  );
};

export default Footer;
