import React from "react";

import MovieCard from "./MovieCard";
import Loading from "./Loading";
import Error from "./Error";

const MovieList = ({ topMovies, error, loading }) => {
  const firstTenMovies = topMovies.slice(0, 10);
  return (
    <>
      <div className="bg-white">
        {/* Titles */}
        <div className="flex items-center justify-between py-5 px-5 md:px-10 lg:pr-16 lg:pl-20 lg:py-5 lg:pt-10 lg:pb-3 bg-white">
          <h3 className="text-black font-bold text-xl">Featured Movie</h3>

          <div className="flex items-center justify-center gap-1 cursor-pointer">
            <h4 className="text-pink-700">See more </h4>
            <img
              src="/Chevron right.svg"
              alt="right pointer"
              className="w-5 pt-1"
            />
          </div>
        </div>

        {/* Content */}
        <div className=" p-10">
          {error ? (
            // Error
            <Error error={error} />
          ) : (
            <div>
              {loading ? (
                // loader
                <Loading />
              ) : (
                // Details
                <div>
                  {/* Movie List */}
                  <div className="grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ml-5 gap-x-5 gap-y-6">
                    {firstTenMovies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieList;
