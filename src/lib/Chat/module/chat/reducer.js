import { CHAT_INIT_END, CHAT_LOADING_END, CHAT_LOADING_START, GET_CHATS } from './action-types';
import { normalize, schema } from 'normalizr';

const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity('messages', {
  user: userSchema,
});
const chatSchema = new schema.Entity('chats', {
  // chat_users: {users: userSchema},
  user: userSchema,
  messages: [messageSchema],
});
const chatListSchema = [chatSchema];

const initialState = {
  chatsInit: true,
  loading: true,
  chats: [],
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

    case GET_CHATS:
      const normalizedData = normalize(action.payload.rows, chatListSchema);

      return {
        ...state,
        entities: { ...normalizedData.entities },
        chats: normalizedData.result,
      };

    default:
      return {
        ...state,
      };
  }
};

export default application;
