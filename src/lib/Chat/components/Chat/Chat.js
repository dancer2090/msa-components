import React from 'react';
// import { Container } from './styles';
import { useSelector } from 'react-redux';
import Box from '../common/Box';
import MessageList from './components/MessageList';
import BottomPanel from './components/BottomPanel';

const Chat = () => {
  const {
    chatAction: {
      type: route,
      params: { chatId },
    },
  } = useSelector(({ application }) => application);

  console.info(`Active Chat id=${chatId}`);

  return (
    <Box height="100vh" padding="0">
      {route === 'INITIAL' ? (
        <Box column justify="center" align="center">
          Select a chat from list or press ADD CHAT to start a new one
        </Box>
      ) : route === 'CHAT' ? (
        <Box column nowrap height="100%" gutter="0" padding="0" justify="space-between">
          <MessageList chatId={chatId} />
          <BottomPanel chatId={chatId} />
        </Box>
      ) : (
        <Box column justify="center" align="center">
          error...
        </Box>
      )}
    </Box>
  );
};

export default Chat;
