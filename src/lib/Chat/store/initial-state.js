const initialState = {
  configuration: {
    init: false,
    portal: 'admin', // admin, nurse
    mode: 'orange', // green, orange
    apiUrl: null,
    socketUrl: null,
  },
  activeChat: {
    messages: [],
  },
  page: {
    active: 'main',
  },
  chats: [],
};

export default initialState;
