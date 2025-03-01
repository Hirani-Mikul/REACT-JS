import React from 'react';
import ChatUserCard from './ChatUserCard';
import Data from './data';

import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function NavRight() {
  const img = Data.users[0].image;
  return (
    <motion.nav
      variants={variants}
      initial='initial'
      animate='enter'
      exit='exit'
      className='main-nav-right'
    >
      <div>
        <div className='action-tab row'>
          <span className='chat-type'>Chats</span>
          <div className='chat-actions'>
            <div className='icon-links'>
              <i className='fas fa-video'></i>
            </div>
            <div className='icon-links'>
              <i className='fas fa-search'></i>
            </div>
            <div className='icon-links'>
              <i className='fas fa-ellipsis-h'></i>
            </div>
          </div>
        </div>
        <ChatUserCard />
        <ChatUserCard />
        <ChatUserCard />
      </div>
      <div>
        <div>
          <span className='chat-type'>Group Chats</span>
        </div>
        <div>
          <div className='nav-links p-small'>
            <div className='c-vsmall round'>
              <img className='small round' src={img} alt='p4' />
            </div>
            <span className='l-small'>Nirav Rabadia</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
