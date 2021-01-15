export const getAPIConfig = ({ token, endpoint }) => {
  return {
    endpoints: [
      {
        name: 'Chat',
        endpoint,
        custom_header: async () => {
          return {
            Authorization: `Bearer ${token}`
          };
        }
      },
    ],
  };
};
