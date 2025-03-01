import React, { useEffect, useRef, useState } from "react";

import MovieCard from "./MoviesCard";

import "./icons/css/all.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [startMovies, setStartMovies] = useState([]);
  const [allowChanging, setAllowChanging] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [showBtn, setShowBtn] = useState(true);

  // const [favorites, setFavorites] = useState([]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key={"YOUR API KEY (REMOVE CURLY BRACES AND QUOTES)"}&language=en-US&query=${query}&page=1&include_adult=false`;

    setShowBtn(false);

    try {
      const res = await fetch(url);
      const resData = await res.json();
      setMovies(resData.results);
    } catch (err) {
      console.log(err);
    }
  };
  const displayStartMoviesList = async () => {
    // https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    // http://discover/movie?sort_by=popularity.desc
    const url = `https://api.themoviedb.org/3/discover/movie?api_key={"YOUR API KEY (REMOVE CURLY BRACES AND QUOTES)"}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   if (!searching.current) displayStartMoviesList();
  //   else searching.current = true;
  // }, []);

  useEffect(() => {
    displayStartMoviesList();
  }, [allowChanging]);

  function nextPage() {
    setAllowChanging(!allowChanging);
    let currentPage = pageNum + 1;
    setPageNum(currentPage);
  }
  function prevPage() {
    setAllowChanging(!allowChanging);
    if (pageNum != 1) {
      let currentPage = pageNum - 1;
      setPageNum(currentPage);
    } else return;
  }

  return (
    <div>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
        ></input>
        <button type="submit" className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <MovieCard data={movies} />
      {showBtn ? (
        <div className="btn-div">
          <button onClick={prevPage} className="btn">
            Previous
          </button>
          <button onClick={nextPage} className="btn">
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
