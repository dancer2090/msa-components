import { INIT_END, SET_CONNECTED, SET_DISCONNECTED, SET_ACTION, SET_MAIN_WINDOW_ACTION } from './action-types';

export const actionInitFinished = {
  type: INIT_END,
};

export const actionConnected = {
  type: SET_CONNECTED,
};

export const actionDisconnected = {
  type: SET_DISCONNECTED,
};

export const setAppAction = ({ type = 'MAIN', params = {} }) => ({
  type: SET_ACTION,
  payload: {
    type,
    params,
  },
});

export const selectChat = chatId => dispatch => {
  dispatch({
    type: SET_MAIN_WINDOW_ACTION,
    payload: {
      type: 'CHAT',
      params: { chatId },
    },
  });
};
