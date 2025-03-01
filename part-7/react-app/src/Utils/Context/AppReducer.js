export default (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      const updatedMessage = state.users.map((user) => {
        if (user.userName === state.currentUser) {
          return {
            ...user,
            messages: [
              ...user.messages,
              { id: action.payload.id, message: action.payload.input },
            ],
          };
        }
        return user;
      });
      return {
        ...state,
        chatRoomMessages: [
          ...state.chatRoomMessages,
          {
            id: action.payload.id,
            userName: state.currentUser,
            message: action.payload.input,
            time: action.payload.time,
          },
        ],
        message_ID_COUNTER: action.payload.id,
        users: updatedMessage,
      };
    case 'CHANGE_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'DELETE_MESSAGE':
      const updatedMessages = state.chatRoomMessages.filter(
        (chat) => chat.id !== action.payload
      );
      return {
        ...state,
        chatRoomMessages: updatedMessages,
      };
    default:
      return state;
  }
};
