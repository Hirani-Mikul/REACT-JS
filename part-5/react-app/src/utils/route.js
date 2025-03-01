import React from "react"
import Favorite from "../Components/favorite"
import Form from "../Components/form"
import Login from "../Components/login"
import MovieDetailCard from "../Components/moviedetails"


export default [
  {
    path: "/",
    exact: true,
    component: () => <Form />
  },
  {
    path: "/favorite",
    component: () => <Favorite />
  },
  {
    path: "/login",
    component: () => <Login />
  },
  {
    path: "/movie_detail_card",
    component: () => <MovieDetailCard />
  }
]