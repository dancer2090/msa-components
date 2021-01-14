import React from 'react';
import App from './components/App/App';
import { StateProvider } from './store';

const Chat = (props) => (
  <StateProvider configuration={props}>
    <App />
  </StateProvider>
);

export default Chat;
