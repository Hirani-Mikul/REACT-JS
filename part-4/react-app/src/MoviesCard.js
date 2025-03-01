import React, { useState } from "react";

import Result from "./Result";
import Favorite from "./favorites";

import "./style.css";

export default function MovieCard(props) {
  return (
    <div className="movie-container">
      {props.data
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="img-des-container">
              <img
                className="movie-img"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + "poster"}
              />
              <div className="movie-overview">
                <h3>Overview: </h3>
                <p>{movie.overview}</p>
              </div>
            </div>

            <div className="card-details">
              <h3 className="movie-title">{movie.title}</h3>
              <h4 className="rating">{movie.vote_average}</h4>
            </div>
          </div>
        ))}
    </div>
  );
}
