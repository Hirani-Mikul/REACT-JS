import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { windowWidth } from '../actions/userActions';

import img from './p4.jpg';

export default function Header() {
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  const values = {
    showCards: width >= 800,
    applyStyle: width <= 800,
    isActive: active,
  };
  const updateWindowWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    dispatch(windowWidth(values));
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, [window.innerWidth, values]);

  const showHeaderRight = width >= 420;
  const showBrand = width >= 160;
  const handleClick = () => {
    if (width >= 800) return;
    setActive(!active);
  };

  return (
    <header className='row'>
      <div className='row'>
        {showBrand && (
          <a className='brand' href='/'>
            ForYou
          </a>
        )}
        {values.applyStyle && (
          <div
            onClick={handleClick}
            className={
              active
                ? 'humburger-menu active pointer'
                : 'humburger-menu pointer'
            }
          >
            <div className='bar bar-1'></div>
            <div className='bar bar-2'></div>
            <div className='bar bar-3'></div>
          </div>
        )}
      </div>
      {showHeaderRight && (
        <div className='header-right row'>
          <a href='/aboutus'>{active ? 'Active' : 'NOT'}</a>
          <a href='/contactus'>Contact Us</a>
          <a className='profile c-small round' href='/profile'>
            <img className='round small pointer' src={img} alt='p1'></img>
          </a>
        </div>
      )}
    </header>
  );
}
