import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Data from './data';
import { motion } from 'framer-motion';

export default function NavLeft() {
  const values = useSelector((state) => state.values);
  const { isActive, applyStyle, showCards } = values;
  const img = Data.users[0].image;

  const variants = {
    initial: { opacity: 0 },
    completed: {
      opacity: 1,
      transition: {
        duration: 0.3,
        // when: 'beforeChildren',
        // staggerChildren: 0.1,
      },
    },
    // exit: { scaleX: 0, scaleY: 0.4, opacity: 0.5 },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const childVariants = {
    initial: {
      // opacity: 0,
      // y: '50%',
      // x: '10%',
    },
    completed: {
      // opacity: 1,
      // y: 0,
      // x: 0,
      // transition: {
      // duration: 0.4,
      // },
    },
  };

  return (
    <motion.nav
      initial='initial'
      animate='completed'
      exit='exit'
      variants={variants}
      className='main-nav-left nav-btns'
    >
      <motion.div variants={childVariants} className='nav-links'>
        <div className='round c-vsmall'>
          <img className='round small' src={img} alt='p2' />
        </div>
        <span>Mikul Hirani</span>
      </motion.div>
      <motion.div variants={childVariants} className='nav-links'>
        <i className='fas fa-calendar-week'></i>
        <span>Events</span>
      </motion.div>
      <motion.div variants={childVariants} className='nav-links'>
        <i className='fas fa-users'></i>
        <span>Groups</span>
      </motion.div>
      <motion.div variants={childVariants} className='nav-links '>
        <i className='fas fa-store'></i>
        <span>Market Place</span>
      </motion.div>
      <motion.div variants={childVariants} className='nav-links '>
        <i className='fab fa-youtube'></i>
        <span>Watch</span>
      </motion.div>
      <motion.div variants={childVariants} className='nav-links '>
        <i className='fas fa-user-friends'></i>
        <span>Find Friends {isActive ? 'true' : 'false'}</span>
      </motion.div>
    </motion.nav>
  );
}
