import { INIT_END, SET_CONNECTED, SET_DISCONNECTED } from './action-types';

const initialState = {
  isInit: true,
  isConnected: false,
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

    default:
      return {
        ...state,
      };
  }
};

export default application;
