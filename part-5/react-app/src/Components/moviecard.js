import React, { useContext, useState } from 'react'

import "../style.css"
import "../icons/css/all.css"
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'



export default function MovieCard ({movie}) {

  const { setCurrentMovie } = useContext(GlobalContext)

  function handleClick() {
    setCurrentMovie(movie)
  }

  const release_date = movie.release_date ? new Date(movie.release_date).getFullYear() : ""

  return(
    <div className="movie-card" >
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={`${movie.title} + poster`}/>
        <div className="movie-overview">
        <div className="movie-rating">
          <i className="fas fa-star"></i>
          <h3 className="rating">{movie.vote_average}/10</h3>
        </div>
          <div onClick={handleClick} className="details-btn"><Link to="/movie_detail_card">View Details</Link></div>
        </div>
      </div>
      <div className="movie-details">
        <h4>{movie.title}</h4>
        <span>{release_date}</span>
      </div>
    </div>
  )
}
