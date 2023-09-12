import React from "react";

const MovieCard = () => {
  return (
    <div>
      <div data-testid="movie-card" className="w-42">
        {/* image poster */}

        <img
          data-testid="movie-poster"
          src="/MovieCard.png"
          alt=""
          className="w-48"
        />

        {/* Release date */}
        <p className="text-xs font-bold text-gray-400 py-2">USA, 2018</p>
        <p className="text-black font-bold text-sm">
          Spider-Man: In The Spider Verse.
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
