import Form from '../../Components/Form';
import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  chatRoomMessages: localStorage.getItem('chatRoomMessages')
    ? JSON.parse(localStorage.getItem('chatRoomMessages'))
    : [{ id: null, userName: '', message: '', time: {} }],
  currentUser: localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : 'Hirani',
  message_ID_COUNTER: localStorage.getItem('message_ID_COUNTER')
    ? JSON.parse(localStorage.getItem('message_ID_COUNTER'))
    : 3,
  users: localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : [
        { id: 1, userName: 'Hirani', messages: [{ id: 1, message: 'Hello' }] },
        { id: 2, userName: 'Mikul', messages: [{ id: 2, message: 'What' }] },
        { id: 3, userName: 'Nirav', messages: [{ id: 3, message: 'Hi' }] },
      ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(state.users));
    localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    localStorage.setItem(
      'message_ID_COUNTER',
      JSON.stringify(state.message_ID_COUNTER)
    );
    localStorage.setItem(
      'chatRoomMessages',
      JSON.stringify(state.chatRoomMessages)
    );
  }, [state]);

  const sendMessage = (input, m_id, time) => {
    dispatch({
      type: 'SEND_MESSAGE',
      payload: { id: m_id, input: input, time: time },
    });
  };

  const changeUser = (user) => {
    dispatch({ type: 'CHANGE_USER', payload: user });
  };

  const deleteMessage = (id) => {
    dispatch({ type: 'DELETE_MESSAGE', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        message_ID_COUNTER: state.message_ID_COUNTER,
        users: state.users,
        currentUser: state.currentUser,
        chatRoomMessages: state.chatRoomMessages,
        sendMessage,
        changeUser,
        deleteMessage,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
