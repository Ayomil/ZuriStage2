import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/SideBar";


const Eachmovie = () => {
  const key = "31de7f9c7f05a6d20abbf1f0d8052b77";
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&page=1`
      )
      .then((response) => {
        setMovies(response.data);
      });
  }, []);

   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };

  return (
    <>
        <div className="flex flex-wrap">
        <Sidebar/>
        <div className="w-full h-[550px] text-white relative">
          <div className="w-full h-full ">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-slate-500"></div>
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
              alt="movie?.title"
            />
            <div className="absolute w-full top-[20%] p-4 md:p-8">
              <h1
                className="text-3xl md:text-5xl font-bold"
                data-testid="movie-title"
              >
                {movies?.title}
              </h1>
              <br />
              <p
                className="text-gray-400 text-sm"
                data-testid="movie-release-date"
              >
                Released: {movies?.release_date}
              </p>
              <br />
              <p
                className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200"
                data-testid="movie-overview"
              >
                {movies?.overview}
              </p>
              <br />
              <p
                className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200"
                data-testid="movie-runtime"
              >
                Runtime: {movies?.runtime} minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Eachmovie;
