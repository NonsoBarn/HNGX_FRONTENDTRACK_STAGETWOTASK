import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center  mt-auto mb-20 pt-24 pb-10">
      {/* Social icons */}

      <div className=" flex items-center justify-center gap-10">
        <img
          src="/facebook-square.png"
          alt="facebook icon"
          className="cursor-pointer"
        />
        <img
          src="/instagram.png"
          alt="instagram icon"
          className="cursor-pointer"
        />
        <img src="/twitter.png" alt="twitter icon" className="cursor-pointer" />
        <img src="/youtube.png" alt="youtube icon" className="cursor-pointer" />
      </div>

      {/* Footer links */}

      <div className=" flex items-center justify-center font-bold text-lg gap-10 py-6">
        <p className="cursor-pointer">Condition of Use</p>
        <p className="cursor-pointer">Privacy & Policy</p>
        <p className="cursor-pointer">Press Room </p>
      </div>

      <p className="text-gray-500 font-bold">© 2021 MovieBox by Nonso Barn </p>
    </div>
  );
};

export default Footer;
