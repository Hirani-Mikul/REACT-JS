import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../index.css';
import '../common.css';
import { signout } from '../actions/userActions';

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    // <div>
    <header className='row'>
      <div>
        <Link className='brand' to='/'>
          ShopFun
        </Link>
      </div>
      <div>
        <Link to='/cart'>
          Cart
          {cartItems.length > 0 && (
            <span className='badge'>{cartItems.length}</span>
          )}
        </Link>
        {userInfo ? (
          <div className='dropdown'>
            <Link to='#'>
              {userInfo.name} <i className='fa fa-caret-down'></i>
            </Link>
            <ul className='dropdown-content'>
              <li>
                <Link to='#signout' onClick={signoutHandler}>
                  Sign Out
                </Link>
              </li>
              <li>
                <Link to='#'>Orders</Link>
              </li>
              <li>
                <Link to='#'>Account</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to='/signin'>Sign In</Link>
        )}
      </div>
    </header>
    // </div>
  );
}
