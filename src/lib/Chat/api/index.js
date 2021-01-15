import { API } from 'aws-amplify';

export const getChats = () => API.get('Chat', '/chat', {
  queryStringParameters: {
    include: 'user,messages'
    // isAdmin: true,
    // page: 0,
    // limit: 10,
  },
});
