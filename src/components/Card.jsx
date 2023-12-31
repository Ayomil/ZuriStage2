import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies);
  return (
    <>
      <h2 className="text-black text-2xl md:text-4xl font-bold m-5">{title}</h2>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-3 md:gap-4">
        {movies.slice(0, 10).map((item, index) => (
          <a
            key={item.id}
            href={`https://loquacious-monstera-ad816d.netlify.app/movies/${item?.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="w-[360px] sm:w-[500px] md:w-[240px] lg:w-[380px] cursor-pointer relative p-4 inline-grid"
              data-testid="movie-card"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt="item?.title"
                data-testid="movie-poster"
              />
              <h1 data-testid="movie-title">{item?.title}</h1>
              <h1 data-testid="movie-release-date">
                Released: {item?.release_date}
              </h1>
            </div>
          </a>
        ))}
      </div>
      ;
    </>
  );
};
export default Card;
