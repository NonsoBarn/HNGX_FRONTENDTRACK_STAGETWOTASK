import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, key }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div data-testid="movie-card" className="w-42">
        {/* image poster */}

        <img
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-48"
        />

        {/* Release date */}
        <p
          data-testid="movie-release-date"
          className="text-xs font-bold text-gray-400 pt-2 pb-1"
        >
          {movie.release_date}
        </p>
        <p data-testid="movie-title" className="text-black font-bold text-sm">
          {movie.title}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
