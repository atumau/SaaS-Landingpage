import React from "react";
import saasData from "./saasdata";
import "./styles/features.css";

function Features() {
  return (
    <section className="features pt-3">
      <h2 className="heading-explore">Explore Our Features</h2>
      {saasData.map((saasItem, index) => (
        <div key={index} className="saas-card">
          <h3 data-aos="zoom-in-up">{saasItem.heading}</h3>
          <p>{saasItem.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
