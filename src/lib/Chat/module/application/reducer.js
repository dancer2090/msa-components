import {
  INIT_END,
  SET_CONNECTED,
  SET_DISCONNECTED,
  SET_ACTION,
} from './action-types';

const initialState = {
  isInit: true,
  isConnected: false,
  action: {
    type: 'MAIN', // ADD_CHAT, OPEN_CHAT
    params: {}, // { chat_id: id }
  },
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case INIT_END:
      return {
        ...state,
        isInit: false,
      };

    case SET_CONNECTED:
      return {
        ...state,
        isConnected: true,
      };

    case SET_DISCONNECTED:
      return {
        ...state,
        isConnected: false,
      };

    case SET_ACTION:
      return {
        ...state,
        action: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default application;
