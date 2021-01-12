import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './lib/Chat';

const CHAT = 'chat';
const component = CHAT;

ReactDOM.render(
  <React.StrictMode>
    {component === CHAT && <Chat/>}
  </React.StrictMode>,
  document.getElementById('root')
);

