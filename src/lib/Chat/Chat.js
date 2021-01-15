import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App/App';
import configureStore from './module';

// import { StateProvider } from './store';

// const Chat = (props) => (
//   <StateProvider configuration={props}>
//     <App />
//   </StateProvider>
// );
const store = configureStore();

const Chat = (props) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Chat;
