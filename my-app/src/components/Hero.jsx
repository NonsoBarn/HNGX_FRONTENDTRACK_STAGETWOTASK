import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative">
      <img src="/Group 71.svg" alt="HeroImage" className="w-full h-auto" />
      <div className="absolute top-0 left-0 w-full hidden lg:block">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
