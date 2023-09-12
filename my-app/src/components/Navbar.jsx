import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-5 lg:px-20">
      {/* Logo */}
      <Link to="/">
        <img src="/Logo.png" alt="Logo" className="w-28 lg:w-32" />
      </Link>
      {/* Search Bar */}
      <div className="hidden lg:block">
        <SearchBar />
      </div>

      {/* Sign in & menu icon */}
      <div className="flex items-center gap-6">
        <div className="text-white hidden lg:block cursor-pointer">
          <p>Sign in</p>
        </div>
        <div className=" bg-pink-700 p-2 rounded-full cursor-pointer">
          <img src="/Menu4.svg" alt="Menu Icon" className="w-4 lg:w-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
