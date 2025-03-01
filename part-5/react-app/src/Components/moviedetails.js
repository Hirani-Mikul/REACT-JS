import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


import "../style.css"
export default function MovieDetailCard() {

  const { favorites, currentMovie, addMovieToFavoriteList, removeMovieFromFavoriteList } = useContext(GlobalContext)

  let storedFavMovie = null

  if (currentMovie) {
    storedFavMovie = favorites.find(m => m.id === currentMovie.id)
  }

  const favMovieDisabled = storedFavMovie ? true : false


  function handleClick() {
    if (!favMovieDisabled) {
      addMovieToFavoriteList(currentMovie)
    } else {
      removeMovieFromFavoriteList(currentMovie.id)
    }
  }

  function MovieDetailPage() {
    return (
      <div className="detail-container">
        <div className="left-container">
          <div className="poster-img"
            className={favMovieDisabled ? "poster-img added-fav" : "poster-img"}
          >
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${currentMovie.poster_path}`} alt={currentMovie.title + "poster"}/>
        </div>
        <button onClick={() => handleClick()}>
          {!favMovieDisabled ? "Add To Favorite" : "Remove Favorite"}
          </button>
        </div>
        <div className="info">
          <h1 className="info-data">{currentMovie.title}</h1>
          <h3 className="info-data">{currentMovie.vote_average}</h3>
          <h3 className="info-data">{currentMovie.release_date}</h3>
          <div>
            <h2>Overview: </h2>
            <p>{currentMovie.overview}</p>
          </div>
        </div>
    </div>
    )
  }


  return (
    <div>
      {currentMovie ? <MovieDetailPage /> : 
      <div className="no-movies">
        <h1>No Movies To Show...</h1>
      </div>}
    </div>
  )
}




// return (
//     <div className="detail-container">
//       <div className="poster-img">
//         <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + "poster"}/>
//       </div>
//       <div className="info">
//         <h2><span className="movie-que">Title: </span><span className="movie-data">{movie.title}</span></h2>
//         <h3><span className="movie-que">Rating: </span><span className="movie-data">{movie.vote_average}</span></h3>
//         <h3><span className="movie-que">Release Date: </span><span className="movie-data">{movie.release_date}</span></h3>
//         <p className="overview"><span>Overview: </span><span>
//           {movie.overview}
//           </span></p>
        
//       </div>
//     </div>
//   )
