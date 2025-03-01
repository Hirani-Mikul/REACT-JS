import React, { useEffect } from 'react'
import { useState } from 'react'

export default async function useFetchAPI(query) {
  const [pageNum, setPageNum] = useState(1)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const popularitySearch = "sort_by=popularity.desc";
  const LANGUAGE = "language=en-US"
  const API = "https://api.themoviedb.org/3/"
  const API_KEY = "api_key={"YOUR API KEY WITHOUT CURLY BRACES AND QUOTES"}"

  const api = `${API}search/movie?${API_KEY}&${LANGUAGE}&query=${query}&page=1&include_adult=false`

  const url = `${API}discover/movie?${API_KEY}&${LANGUAGE}&${popularitySearch}&include_adult=false&include_video=false&page=${pageNum}`;

    // try {
    //   const res = await fetch(url)
    //   const resData = await res.json()
    //   setMovies(resData.results)
    //   setLoading(true)
    // } catch (err) {
    //   console.log(err)
    // }
    // if (loading) return movies
}

