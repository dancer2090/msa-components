import { API } from 'aws-amplify';

export const getChats = () => API.get('Chat', '/chat', {
  queryStringParameters: {
    include: 'user,messages'
    // isAdmin: true,
    // page: 0,
    // limit: 10,
  },
});

export const createChat = (body) => API.post('Chat', '/chat', { body } );

export const getUsers = ({ context }) => API.get('Chat', '/chat/users', {
  queryStringParameters: {
    context,
  }
});
