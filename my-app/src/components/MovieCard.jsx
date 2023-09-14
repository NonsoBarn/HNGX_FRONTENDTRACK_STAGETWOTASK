import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled); // Toggle the like state
  };

  // Converting date
  const releaseDate = new Date(movie.release_date);

  // format the date as "Fri 20, Sept 1994"
  const dateOptions = {
    weekday: "short", // Short weekday name (e.g., "Fri")
    day: "numeric", // Day of the month (e.g., "20")
    month: "short", // Short month name (e.g., "Sept")
    year: "numeric", // Full year (e.g., "1994")
  };

  // Convert releaseDate to UTC string
  const utcReleaseDate = releaseDate.toLocaleDateString(undefined, dateOptions);

  return (
    <div className="relative">
      {" "}
      <button
        onClick={handleToggle}
        className="bg-white bg-opacity-50 rounded-full absolute p-1 right-3 top-3"
      >
        {isToggled ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82842 5.17157L9.99999 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L9.99999 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
              fill="#be185d"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82842 5.17157L9.99999 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L9.99999 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
              fill="#fff"
            />
          </svg>
        )}
      </button>
      <Link to={`/movies/${movie.id}`}>
        <div data-testid="movie-card" className="w-42 ">
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
            {utcReleaseDate}
          </p>
          <p data-testid="movie-title" className="text-black font-bold text-sm">
            {movie.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
