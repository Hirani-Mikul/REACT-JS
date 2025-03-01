import React, { createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

const initialState = {
  color_index: localStorage.getItem('todoColorIndex') ? JSON.parse(localStorage.getItem('todoColorIndex')) : 0,
  id_counter: localStorage.getItem('todoID') ? JSON.parse(localStorage.getItem('todoID')) : 0,
  todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
    localStorage.setItem('todoID', JSON.stringify(state.id_counter))
    localStorage.setItem("todoColorIndex", JSON.stringify(state.color_index))
  }, [state])

  const addTodo = (todo, id, color, index) => {
    dispatch({type: 'ADD_TODO', payload: {todo: todo, id: id, completed: false, color: color, colorIndex: index}})
  }

  const setCompleted = (id) => {
    dispatch({type: 'UPDATE_TODO', payload: id})
  }

  const removeTodo = id => {
    dispatch({type: 'REMOVE_TODO', payload: id})
  }

  const handleEdit = (input, id) => {
    dispatch({type: 'EDIT_TODO', payload: {input, id}})
  }

  return (
    <GlobalContext.Provider value={{todos: state.todos, idCounter: state.id_counter, colorIndex: state.color_index, addTodo, removeTodo, setCompleted, handleEdit}}>
      {props.children}
    </GlobalContext.Provider>
  )
}