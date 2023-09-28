import React from "react";
import "./styles/about.css";
const About = () => {
  return (
    <>
      <div className="card text-bg-light">
        <img src="saasss.avif" className="card-img" alt="img-about" />
        <div className="card-img-overlay container mt-3">
          <h2 className="text-white heading-text " data-aos="fade-down">
            Software as a Service
          </h2>
          <p className="text-white para-write" data-aos="fade-left">
            Empower your business to reach greater heights by delivering
            extraordinary digital experiences that transcend platform
            limitations, all achievable through our all-encompassing SaaS
            development solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
