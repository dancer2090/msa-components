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
import { normalize, schema } from 'normalizr';

export const userSchema = new schema.Entity('users');
export const messageSchema = new schema.Entity('messages', {
  user: userSchema,
});
const chatUsersSchema = { user: userSchema };
export const chatSchema = new schema.Entity('chats', {
  chat_users: [chatUsersSchema],
  user: userSchema,
  messages: [messageSchema],
});
export const chatListSchema = [chatSchema];

const initialState = {
  chatsInit: true,
  loading: true,
  pending: false,
  entities: { chats: {}, users: {}, messages: {} }, //message sending
  chats: [],
  chat: null,
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_INIT_END:
      return {
        ...state,
        chatsInit: false,
      };

    case CHAT_LOADING_START:
      return {
        ...state,
        loading: true,
      };

    case CHAT_LOADING_END:
      return {
        ...state,
        loading: false,
      };

    case CHAT_PENDING_START:
      return {
        ...state,
        pending: true,
      };

    case CHAT_PENDING_END:
      return {
        ...state,
        pending: false,
      };

    case GET_CHATS:
      const normalizedData = normalize(action.payload.rows, chatListSchema);

      return {
        ...state,
        entities: { ...normalizedData.entities },
        chats: normalizedData.result,
      };

    case CHAT_ADD_MESSAGE:
      const messageNormalized = normalize(action.payload.data, messageSchema);
      // const chat = state.entities.chats[action.payload.chatId];

      console.info(`Added message`, messageNormalized);

      return {
        ...state,
        entities: { ...messageNormalized.entities },
        // chats: {...state.entities.chats, },
      };

    case CHAT_MESSAGE_RECEIVED:
      console.info(`Websocket message`, JSON.parse(action.payload.data));
      const dataJson = action.payload.data || '{}';
      const data = JSON.parse(dataJson);
      const type = data?.type;
      const body = data?.body;
      switch (type) {
        case 'YOU_ADDED_TO_CHAT':
          if (
            !body.id ||
            !body.name ||
            !body.chat_users ||
            !body.description ||
            !body.createdAt ||
            !body.createdAt ||
            !body.user_id
          ) {
            //check required fields
            return {
              ...state,
            };
          }
          const newChatNormalized = normalize(body, chatSchema);
          newChatNormalized.entities.chats[body.id].user = body.user_id;
          newChatNormalized.entities.chats[body.id].messages = [];
          return {
            ...state,
            chats: [newChatNormalized.result, ...state.chats],
            entities: {
              ...state.entities,
              chats: { ...state.entities.chats, ...newChatNormalized.entities.chats },
              users: { ...state.entities.users, ...newChatNormalized.entities.users },
            },
          };

        case 'NEW_MESSAGE':
          if (!body.chat_id || !body.id || !body.description || !body.createdAt || !body.user_id) {
            //check required fields
            return {
              ...state,
            };
          }
          const newMessageNormalized = normalize(body, messageSchema);
          const targetChat = { ...state.entities.chats[body.chat_id] };
          if (!Object.keys(targetChat).length) {
            return { ...state };
          }
          targetChat.messages.unshift(newMessageNormalized.result);
          //add userId for replay message schema as from API
          newMessageNormalized.entities.messages[body.id].user = body.user_id;
          return {
            ...state,
            entities: {
              ...state.entities,
              messages: { ...state.entities.messages, ...newMessageNormalized.entities.messages },
              chats: { ...state.entities.chats, [body.chat_id]: targetChat },
            },
          };

        default:
          return {
            ...state,
          };
      }

    default:
      return {
        ...state,
      };
  }
};

export default application;
