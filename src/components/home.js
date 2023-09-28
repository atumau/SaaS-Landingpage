import React from "react";
import Features from "./features";
import Pricing from "./pricing";
import FAQ from "./faq";
import About from "./about";

const home = () => {
  return (
    <>
      <About />
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
};

export default home;
