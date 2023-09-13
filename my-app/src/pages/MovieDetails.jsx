import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/api";
import SideNav from "../components/SideNav";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching movie details from TMDB API using the 'id' parameter
    axiosInstance
      .get(`/movie/${id}`)
      .then((response) => {
        setMovieDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Request failed: Could not get movie details data.");
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row">
        {/* Side Nav */}
        <div className="hidden lg:flex">
          <SideNav />
        </div>

        {/* Reg Nav Mobile */}

        <div className="bg-black lg:hidden">
          <Navbar />
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
                <div className="ml-64">
                  <Loading />
                </div>
              ) : (
                // Details
                <div>
                  {/* Movie Details */}
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${movieDetails.backdrop_path}`}
                        alt={movieDetails.title}
                        className="lg:w-1/2"
                      />
                    </div>
                    <div className="flex gap-5 font-semibold text-xs lg:text-sm ">
                      <p data-testid="movie-title">{movieDetails.title}</p>
                      <ul className="flex justify-center items-center gap-3">
                        <li data-testid="movie-release-date">
                          {" "}
                          {movieDetails.release_date}
                        </li>
                        <li data-testid="movie-runtime">
                          {movieDetails.runtime} minutes
                        </li>
                      </ul>
                    </div>

                    {/* description */}
                    <div className="lg:w-3/5 mt-3">
                      <p data-testid="movie-overview">
                        {movieDetails.overview}
                      </p>
                    </div>

                    {/* Other Addition */}

                    <div className="mt-3 text-xs lg:text-base">
                      <div className="flex gap-2 mt-3 ">
                        <p>Tagline:</p>{" "}
                        <p className="text-pink-700">{movieDetails.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
