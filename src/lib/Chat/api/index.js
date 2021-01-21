import { API } from 'aws-amplify';

export const getChats = () =>
  API.get('Chat', '/chat', {
    queryStringParameters: {
      include: 'user,messages,chat_users',
      limit: 200,
      // isAdmin: true,
      // page: 0,
    },
  });

export const createChat = body => API.post('Chat', '/chat', { body });

export const getUsers = ({ context }) =>
  API.get('Chat', '/chat/users', {
    queryStringParameters: {
      context,
    },
  });

export const createMessage = (chatId, body) => API.post('Chat', `/chat/${chatId}/message`, { body });
