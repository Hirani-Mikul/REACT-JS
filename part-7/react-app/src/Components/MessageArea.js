import React, { useContext } from 'react';

import '../icons/css/all.min.css';
import '../style.css';
import '../utils.css';
import { GlobalContext } from '../Utils/Context/GlobalContext';
import MessageCard from './MessageCard';

const MessageArea = () => {
  const { users, currentUser, chatRoomMessages, deleteMessage } = useContext(
    GlobalContext
  );

  return (
    <div className='message-area'>
      {chatRoomMessages
        .filter((chat) => chat.userName)
        .map((chat) => (
          <MessageCard
            key={chat.id}
            chat={chat}
            currentUser={currentUser}
            deleteMessage={deleteMessage}
          />
        ))}
      {/* {chatRoomMessages.map((chat) => (
        <MessageCard key={chat.id} chat={chat} currentUser={currentUser} />
      ))} */}
    </div>
  );
};

export default MessageArea;
