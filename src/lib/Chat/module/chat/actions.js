import { CHAT_INIT_END, CHAT_LOADING_END, CHAT_LOADING_START, GET_CHATS } from './action-types';
import { getChats as fetchChats } from '../../api';

export const actionChatsInitEnd = {
  type: CHAT_INIT_END,
};

export const actionLoadingOn = {
  type: CHAT_LOADING_START,
};

export const actionLoadingOff = {
  type: CHAT_LOADING_END,
};

export const getChats = () => async dispatch => {
  dispatch(actionLoadingOn);
  try {
    const data = await fetchChats();
    dispatch({ type: GET_CHATS, payload: data });
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(actionLoadingOff);
    dispatch(actionChatsInitEnd);
  }
};
