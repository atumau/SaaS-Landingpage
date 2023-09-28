import React from "react";
import "./styles/pricing.css";
function PricingSection() {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹300/month",
      features: ["Access to the Software", "User Management", "Data Storage"],
    },
    {
      name: "Advanced Plan",
      price: "₹750/month",
      features: [
        "Access to the Software",
        "User Management",
        "Data Storage",
        "Customer Support",
      ],
    },
    {
      name: "Standard Plan",
      price: "₹450/month",
      features: ["Access to the Software", "Data Storage", "Usage Limits"],
    },
  ];

  return (
    <section className="pricing-section mt-3">
      <h2 className="plan-head">Choose Your Plan</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3 data-aos="flip-up">{plan.name}</h3>
            <div className="price" data-aos="zoom-out">
              {plan.price}
            </div>
            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className="choose-plan-button"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
