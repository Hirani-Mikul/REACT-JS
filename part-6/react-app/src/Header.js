import React from 'react';

import './style.css';
import './icons/css/all.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>
          <i className='fas fa-clipboard-list'></i>
          Daily Todo List
        </h1>
      </Link>
      <ul className='nav-bar-links'>
        <Link to='/'>
          <li className='bar'>
            <i className='fas fa-tasks'></i>
            <span>All</span>
          </li>
        </Link>
        <Link to='/completed'>
          <li className='bar'>
            <i className='fas fa-clipboard-check'></i>
            <span>Completed</span>
          </li>
        </Link>
        <Link to='/incompleted'>
          <li className='bar'>
            <i className='fas fa-ban'></i>
            <span>Incomplete</span>
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
