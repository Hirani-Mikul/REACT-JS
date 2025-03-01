import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';

import './other.css';
import './style.css';
import './icons/css/all.min.css';

const IncompletedTodo = () => {
  const { todos, removeTodo } = useContext(GlobalContext);

  return (
    <div className='completed-todo-container'>
      {todos
        .filter((todo) => !todo.completed)
        .map((todo) => (
          <div
            key={todo.id}
            style={{ backgroundColor: todo.color }}
            className='completed-todo-card'
          >
            <div className='todo-each'>
              <p>{todo.todo}</p>
            </div>
            <div className='controls-div'>
              {/* <p>
                <i className='fas fa-edit'></i>
                <span>Edit</span>
              </p> */}
              <p>
                <i
                  onClick={() => removeTodo(todo.id)}
                  className='fas fa-trash-alt'
                ></i>
                <span>Delete</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default IncompletedTodo;
