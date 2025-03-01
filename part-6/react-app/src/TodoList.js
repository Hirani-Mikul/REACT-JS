import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'

import './icons/css/all.min.css'
import Todo from './Todo'

const TodoList = () => {
  
  const {todos} = useContext(GlobalContext)


  return (
    <div className="todo-container">
      {todos.length > 0 && todos.map(todo => (
        <Todo todo={todo} key={todo.id}/>
      ))}
      {todos.length === 0 && <div><h1>No todos to show!</h1></div>}
    </div>
  )
}

export default TodoList
