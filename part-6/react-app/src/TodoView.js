import React, { useState } from 'react';

import './style.css';

import './icons/css/all.min.css';
import { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';

const TodoView = ({ handleView, todo }) => {
  const [input, setInput] = useState(todo.todo);
  const [allowEdit, setAllowEdit] = useState(false);

  const { handleEdit } = useContext(GlobalContext);

  const letter_count = input.length;

  const saveBtnDisabled = input == todo.todo;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setAllowEdit(true);
  };

  const handleSave = () => {
    setAllowEdit(false);
    handleEdit(input, todo.id);
  };

  return (
    <div className='view-container'>
      <div className='view-header'>
        <p>Letters: {letter_count}</p>
        <nav className='controls'>
          <span className={saveBtnDisabled ? 'no-change' : null}>
            <i onClick={handleSave} className='fas fa-save'></i>
          </span>
          <span>
            <i onClick={() => handleView()} className='fas fa-times'></i>
          </span>
        </nav>
      </div>
      <hr />
      <div className='content'>
        {allowEdit ? (
          <form onSubmit={handleSubmit}>
            <textarea
              maxLength='200'
              onChange={handleChange}
              autoFocus
              value={input}
              name='edit'
              id='edit'
            ></textarea>
          </form>
        ) : (
          <p onClick={handleClick}>{todo.todo}</p>
        )}
      </div>
    </div>
  );
};

export default TodoView;
