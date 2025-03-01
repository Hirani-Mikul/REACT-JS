export default (state, action) => {
  switch(action.type) {
    case 'ADD_MOVIE_TO_CURRENT': 
      return {
        ...state,
        currentMovie: action.payload
      }
    case 'ADD_MOVIE_TO_FAVORITE_LIST':
      return {
        ...state,
        favorites: [action.payload, ...state.favorites]
      }
      case 'REMOVE_MOVIE_FROM_FAVORITE_LIST':
        return {
          ...state,
          favorites: state.favorites.filter(movie => movie.id !== action.payload)
        }
    default:
      return state
  }
}