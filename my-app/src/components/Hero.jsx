import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative">
      <img src="/Group 71.svg" alt="Hero image" className="w-full h-auto" />
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
