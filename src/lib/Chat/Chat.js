import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App/App';
import configureStore from './module';

const store = configureStore();

const Chat = (props) => (
  <Provider store={store}>
    <App configuration={props} />
  </Provider>
);

export default Chat;
