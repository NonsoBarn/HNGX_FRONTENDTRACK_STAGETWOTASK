import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center  mt-auto mb-20">
      {/* Social icons */}

      <div className=" flex items-center justify-center gap-10">
        <img src="/facebook-square.png" alt="facebook icon" />
        <img src="/instagram.png" alt="instagram icon" />
        <img src="/twitter.png" alt="twitter icon" />
        <img src="/youtube.png" alt="youtube icon" />
      </div>

      {/* Footer links */}

      <div className=" flex items-center justify-center font-bold text-lg gap-10 py-6">
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room </p>
      </div>

      <p className="text-gray-500 font-bold">© 2021 MovieBox by Nonso Barn </p>
    </div>
  );
};

export default Footer;
