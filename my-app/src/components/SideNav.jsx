import React from "react";

const SideNav = () => {
  return (
    <div className=" flex flex-col items-center justify-center rounded-r-[40px] px-20 border border-gray-400 py-10 mb-7">
      {/* logo */}
      <div>
        <img src="/Logoblack.png" alt="Logo" className="w-28 lg:w-32" />
      </div>

      {/* Nav components */}
      <div className="mt-16">
        {/* Home */}
        <div className="flex items-center gap-3 ">
          <img src="/Home.png" alt="Home icon" className="" />
          <p className="font-bold text-gray-500">Home</p>
        </div>

        {/* Movies */}
        <div className="pl-1 flex items-center gap-3 mt-10 ">
          <img src="/Movie Projector.png" alt="Movies icon" className="" />
          <p className="font-bold text-gray-500">Movies</p>
        </div>

        {/* Tv Series */}
        <div className=" flex items-center gap-3 mt-10 ">
          <img src="/Tv Show.png" alt="TV Series Icon" className="" />
          <p className="font-bold text-gray-500">TV Series</p>
        </div>

        {/* Upcoming */}
        <div className=" flex items-center gap-3 mt-10 ">
          <img src="/Calendar.png" alt="Upcoming icon" className="" />
          <p className="font-bold text-gray-500">Upcoming</p>
        </div>
      </div>

      {/* Play movie Quiz */}

      <div className="border bg-pink-100 border-pink-700 rounded-[20px] pt-8 pb-4 px-4 w-40 mt-10 flex flex-col justify-center items-center">
        <h3 className="text-sm font-bold ">
          Play movie quizes and earn free tickets
        </h3>
        <p className="mt-2 text-xs font-bold text-gray-500">
          50k people are playing now
        </p>
        <button className="mt-2 bg-pink-300 text-pink-900 font-bold text-xs px-3 py-2 rounded-full">
          Start Playing
        </button>
      </div>

      {/* Nav components */}
      <div className="mr-10 mt-12">
        {/* Home */}
        <div className="flex items-center ">
          <img src="/Logout.png" alt="Logout icon" className="" />
          <p className="font-bold text-gray-500">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
