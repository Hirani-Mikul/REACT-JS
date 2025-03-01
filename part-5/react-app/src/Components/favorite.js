import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import MovieCard from './moviecard'

export default function Favorite() {

  const { favorites } = useContext(GlobalContext)

  if (favorites.length == 0) return <div className="no-movies"><h1>No Movies To Show...</h1></div>
  else
  return (
     <div className="movie-container fav-list">
      {favorites.filter(movie => movie.poster_path).map(movie => (<MovieCard key={movie.id} movie={movie}/>))}
    </div>
  )
}
