import React, { useEffect, useState } from 'react'
import useFetchAPI from '../utils/hooks/fetchAPI'
import Result from '../Components/result'

import "../style.css"

import "../icons/css/all.css"
import Axios from 'axios'

export default function Form() {

  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [searchPage, setSearchPage] = useState(1)
  const [allowSearch, setAllowSearch] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [movies, isPrevBtn, errors] = useFetchAPI(page, query, allowSearch, isSearching, setIsSearching, searchPage)


  function handleChange(e) {
    setQuery(e.target.value)
  }

  function handleClick(e) {
    const action = e.target.name
    if (action === "next") 
    {
      if (isSearching) setSearchPage(searchPage + 1)
      else setPage(page + 1)
    }
    else if (action === "prev") 
    {
      if (isSearching && searchPage != 1) setSearchPage(searchPage - 1)
      else setPage(page -1)
    }
    else return
  }

  function handleSubmit(e) 
  { e.preventDefault() 
    setIsSearching(true)
    setAllowSearch(!allowSearch) 
  } 

  return ( 
  <div> 
    <form onSubmit={handleSubmit}>
      <input 
        type="text"  
        value={query}  
        name="query"  
        autoComplete="off"  
        required
        onChange={handleChange} >   
      </input> 
      <label htmlFor="query"
        className="label-query">
        <span className="content-name">Search...</span>
      </label> 
      <button type="submit" className={query ? "show" : null}><i
      className="fas fa-search search-btn"></i></button> 
    </form> 
    {movies.length > 1
    ? <Result movies={movies}/> : null} 
    {errors.length > 1 ? <div
      className="error"><h1>{errors}</h1></div> : null} 
    {movies.length > 1 &&
      isSearching &&  <div className="page-btn"> {isPrevBtn && <button name="prev"
      onClick={handleClick} className="btn">Previous</button>} <button name="next"
      onClick={handleClick} className="btn">Next</button> 
  </div> } 
  </div> 
  )
}
