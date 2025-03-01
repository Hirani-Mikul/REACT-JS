import React from 'react';
import Data from './data';

export default function ChatUserCard() {
  const img = Data.users[0].image;

  return (
    <div className='nav-links p-small'>
      <div className='c-vsmall round'>
        <img className='small round' src={img} alt='p4' />
      </div>
      <span className='l-small'>Harshad Vekaria</span>
    </div>
  );
}
