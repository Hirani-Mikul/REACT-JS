import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const API = process.env.REACT_APP_MOVIEDB_API
const secret = process.env.REACT_APP_MOVIEDB_API_KEY


export default function useFetchAPI(page, query, allowSearch, isSearching, setIsSearching, searchPage) {

  const [movies, setMovies] = useState([])
  const [errors, setErrors] = useState([])

  const [isPrevBtn, setIsPrevBtn] = useState(false)

  const searchLink = `${API}search/movie?api_key=${secret}&language=en-US&query=${query}&page=${searchPage}&include_adult=false`

  const discoverLink = `${API}discover/movie?api_key=${secret}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
  
  const url = isSearching ? searchLink : discoverLink

  useEffect(() => {
    Axios.get(url)
    .then(res => {
      setMovies(res.data.results)
      if (searchPage != 1) setIsPrevBtn(true) 
      else setIsPrevBtn(false)
    })
    .catch(err => {
      setErrors(err.response.data.status_message)
    })
  }, [page, allowSearch, searchPage])
   
    
    return [movies, isPrevBtn, errors]
}
