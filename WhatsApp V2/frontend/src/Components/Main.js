import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavLeft from './NavLeft';
import NavRight from './NavRight';
import UserCard from './UserCard';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { listUsers } from '../actions/userActions';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const variants2 = {
  initial: { x: '100%' },
  enter: { x: 0, transition: { duration: 0.4 } },
  exit: { x: '100%', transition: { duration: 0.4 } },
};

export default function Main() {
  const userList = useSelector((state) => state.userList);
  const values = useSelector((state) => state.values);
  const { loading, errors, users } = userList;
  const { isActive, showCards, applyStyle } = values;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, []);

  const style = {
    gridTemplateColumns: '1fr',
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        style={loading || errors || applyStyle ? style : null}
        className='main-container'
      >
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : errors ? (
          <MessageBox variant='danger'>{errors}</MessageBox>
        ) : (
          <>
            {showCards || isActive ? <NavLeft /> : null}
            {!isActive && (
              <main className='main-section'>
                {users.map((item) => (
                  <UserCard key={item._id} data={item} />
                ))}
              </main>
            )}
            {showCards && <NavRight />}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
