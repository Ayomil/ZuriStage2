import React, { useState,useEffect } from "react"
import axios from "axios";

const Card = ({title,fetchURL}) => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
      axios.get(fetchURL).then((response) => {
        setMovies(response.data.results);
      });
    }, [fetchURL]);
  return (
    <>
      <h2 className="text-black text-2xl md:text-4xl font-bold m-5">
        {title}
      </h2>
      <div>
        <div className=" items-center justify-center">
          {movies.slice(0, 10).map((item, id) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
export default Card