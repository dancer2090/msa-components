export const getAPIConfig = ({ endpoint, getToken }) => {
  return {
    endpoints: [
      {
        name: 'Chat',
        endpoint,
        custom_header: async () => {
          return {
            Authorization: `Bearer ${getToken()}`
          };
        }
      },
    ],
  };
};
