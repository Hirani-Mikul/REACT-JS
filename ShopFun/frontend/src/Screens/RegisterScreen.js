import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != confirmPassword)
      alert('PASSWORD AND CONFIRM PASSWORD DOES NOT MATCH');
    else dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <h1>Create Account</h1>
        </div>
        {loading && (
          <div className='row centerX centerY'>
            <LoadingBox />
          </div>
        )}
        {error && <MessageBox variant='danger'>{error}</MessageBox>}
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='Enter name'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            placeholder='Enter email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Password</label>
          <input
            type='password'
            id='confirmPassword'
            placeholder='Enter confirm password'
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button type='submit' className='primary'>
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account? {''}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
