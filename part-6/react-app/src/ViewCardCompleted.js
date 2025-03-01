import React, { useState } from 'react';

import './other.css';
const ViewCardCompleted = ({ todo, handleView }) => {
  const [input, setInput] = useState('');

  const saveBtnDisabled = false;

  const [allowEdit, setAllowEdit] = useState(false);

  const handleSave = () => {
    console.log('nothing');
  };

  const handleSubmit = (e) => {};
  const handleChange = (e) => {};
  const handleClick = () => {};

  return (
    <div className='edit-container'>
      <div className='completed-view-header'>
        <p>Letters: 10</p>
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
      <div className='completed-view-content'>
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

export default ViewCardCompleted;
