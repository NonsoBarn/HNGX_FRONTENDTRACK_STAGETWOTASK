import React from "react";

import MovieCard from "./MovieCard";

const MovieList = ({ topMovies }) => {
  const firstTenMovies = topMovies.slice(0, 10);
  return (
    <>
      <div>
        {/* Titles */}
        <div className="flex items-center justify-between lg:px-20 lg:py-5">
          <h3 className="text-black font-bold text-xl">Featured Movie</h3>
          <h4 className="text-pink-700">See more</h4>
        </div>

        {/* Movie List */}
        <div className="grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ml-5 gap-5">
          {firstTenMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
