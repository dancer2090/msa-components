export const getAPIConfig = ({ endpoint, token }) => {
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
