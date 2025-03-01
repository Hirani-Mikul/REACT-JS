import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext()


export const AppContextProvider = (props) => {

  const [favoriteMovies, setFavoriteMovies] = useState([])

  const [movieDetails, setMovieDetails] = useState(null)

  return (
    <AppContext.Provider value={[favoriteMovies, setFavoriteMovies, movieDetails, setMovieDetails]}>
      {props.children}
    </AppContext.Provider>
  )
}