import React from "react";
import AboutImg from "../../images/aboutImg.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="container text-center my-4 about">
      <div className="row">
        <div className="col-lg-7 mx-auto shadow py-4">
          <div className="about-img">
            <img src={AboutImg} alt="" />
            <h2 className="fw-bold mt-2 mb-3">MD: Minhajul Alam</h2>
          </div>
          <div className="col-md-9 mx-auto">
            <p>
              Hi! I am Minhajul Alam.I'm learning web development.My interest in
              learning Way development is aroused by watching YouTube. On
              YouTube, I watch videos on some web development topics, and
              watching them arouses my curiosity. Then I learned HTMl, CSS and
              bootstrap from YouTube. And a few more days later I enroll in the
              program development hero's web development course. Now my goal is
              to become a skilled web developer. And Alhamdulillah I am slowly
              moving towards my goal. Hopefully soon I will be able to achieve
              my goal. And after becoming a skilled web developer, I will get a
              good job.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
