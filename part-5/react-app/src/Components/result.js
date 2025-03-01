import React, { useContext } from 'react'

import MovieCard from '../Components/moviecard'

import "../style.css"
import MovieDetailCard from './moviedetails'

export default function Result({movies}) {

  return (
  <div className="movie-container">
      {movies.filter(movie => movie.poster_path).map(movie => (<MovieCard key={movie.id} movie={movie}/>))}
    </div>
  )
}
