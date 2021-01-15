export const getChats = () => {
  return API.get('Chat', '/chat', {
    queryStringParameters: {
      isAdmin: true,
      page: 0,
      limit: 10,
    },
  });
};
