import React, { useContext } from 'react'

import './style.css'
import './icons/css/all.min.css'
import { GlobalContext } from './context/GlobalContext'
import { useState } from 'react'
import TodoView from './TodoView'

const Todo = ({todo}) => {

  const [view, setView] = useState(false)

  const { removeTodo, setCompleted } = useContext(GlobalContext)

  const handleView = () => {
    setView(!view)
  }

  const handleClick = () => {
    if (view) return
    removeTodo(todo.id)
  }

  const handleChange = () => {
    setCompleted(todo.id)
  }

  return (
     <div style={{backgroundColor: todo.color}} className={view ? 'todo-card view' : 'todo-card'}>
        <div className="todo-note">
          <label>
            <input 
              name='todo' 
              type="checkbox" 
              checked={todo.completed} 
              onChange={handleChange}/>
            <span className='checkmark'></span>
          </label>
          <p>{todo.todo}</p>
        </div>
        <div className="todo-controls">
          <span>
            <i onClick={handleView} className="far fa-edit"></i>
          </span>
          <span>
            <i onClick={handleClick} className="fas fa-trash-alt"></i>
          </span>
        </div>
       {view &&
         <TodoView todo={todo} handleView={handleView}/>
       }
      </div>
  )
}

export default Todo
