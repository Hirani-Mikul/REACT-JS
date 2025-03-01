import React, { useState } from "react";

import MovieCard from "./MovieCard";
import Loader from "./Loader";

export default function Form() {
  const [query, setQuery] = useState("");
  const [movies, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const searchMovie = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = `https://api.themoviedb.org/3/search/movie?api_key={"YOUR API KEY (REMOVE CURLY BRACES AND QUOTES)"}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setMovie(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <div>
      <form onSubmit={searchMovie}>
        <label htmlFor="query">Search Movie: </label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          placeholder="Type Movie Here"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <MovieCard data={movies} />
      {isLoading ? <Loader /> : null}
    </div>
  );
}
/*
  DISPLAY 9 MOVIES AT START UP
  WHEN YOU CLICK IT TAKES YOU TO THE PAGE
*/
