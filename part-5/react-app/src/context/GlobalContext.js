import React, { createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'



const initialState = {
  currentMovie: null,
  favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)


  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  }, [state.favorites])

  const addMovieToFavoriteList = movie => {
    dispatch({ type: 'ADD_MOVIE_TO_FAVORITE_LIST', payload: movie})
  }

  const setCurrentMovie = movie => {
    dispatch( {type: 'ADD_MOVIE_TO_CURRENT', payload: movie})
  }

  const removeMovieFromFavoriteList = id => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_FAVORITE_LIST', payload: id})
  }

  return (
    <GlobalContext.Provider value={{favorites: state.favorites, currentMovie: state.currentMovie, addMovieToFavoriteList, removeMovieFromFavoriteList, setCurrentMovie}}>
      {props.children}
    </GlobalContext.Provider>
  )
}