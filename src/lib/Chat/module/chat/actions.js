import {
  CHAT_ADD_MESSAGE,
  CHAT_INIT_END,
  CHAT_LOADING_END,
  CHAT_LOADING_START,
  CHAT_MESSAGE_RECEIVED,
  CHAT_PENDING_END,
  CHAT_PENDING_START,
  GET_CHATS,
} from './action-types';
import { createMessage, getChats as fetchChats } from '../../api';

export const actionChatsInitEnd = {
  type: CHAT_INIT_END,
};

export const actionLoadingOn = {
  type: CHAT_LOADING_START,
};

export const actionLoadingOff = {
  type: CHAT_LOADING_END,
};

export const actionPendingOn = {
  type: CHAT_PENDING_START,
};

export const actionPendingOff = {
  type: CHAT_PENDING_END,
};

export const onMessageReceived = event => ({
  type: CHAT_MESSAGE_RECEIVED,
  payload: event,
});

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

export const sendMessage = (chatId, body) => async dispatch => {
  dispatch(actionPendingOn);
  try {
    const data = await createMessage(chatId, body);
    // dispatch({ type: CHAT_ADD_MESSAGE, payload: { chatId, data } }); //error at the moment
    return true;
  } catch (e) {
    console.error(e);
    return false;
  } finally {
    dispatch(actionPendingOff);
  }
};
