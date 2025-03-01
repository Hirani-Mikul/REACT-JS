import React, { useState } from 'react';

import '../icons/css/all.min.css';
import '../style.css';
import '../utils.css';

const MessageCard = ({ chat, currentUser, deleteMessage }) => {
  const opponentStyle = {
    marginLeft: 'auto',
    backgroundColor: '#bce3c1',
  };
  const applyOpponentStyle =
    chat.userName != currentUser ? opponentStyle : null;

  const handleClick = (e) => {
    deleteMessage(chat.id);
  };

  return (
    <div style={applyOpponentStyle} className='message-card'>
      {applyOpponentStyle && (
        <span className='opponentStyling'>{chat.userName}</span>
      )}
      <p className='message-text'>{chat.message}</p>
      <span className='delete_message'>
        <i onClick={handleClick} className='fas fa-times'></i>
      </span>
      <span className='time-span'>
        {chat.time.hours + ':' + chat.time.minutes + ' ' + chat.time.ampm}
      </span>
    </div>
  );
};

export default MessageCard;
