import { INIT_END, SET_CONNECTED, SET_DISCONNECTED } from './action-types';

export const actionInitFinished = {
  type: INIT_END,
};

export const actionConnected = {
  type: SET_CONNECTED,
};

export const actionDisconnected = {
  type: SET_DISCONNECTED,
};
