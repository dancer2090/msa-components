import React from 'react';
import Box from '../../common/Box';
import { MessageBody, MessageDate, UserName } from './styles';

const MessageListItem = ({ message = '...', isOwned = true, user , date = '...' }) => {
  return (
    <Box
      column
      nowrap
      height="auto"
      maxWidth="80%"
      backgroundColor="white"
      gutter="8px 16px"
      padding="16px"
      borderRadius="10px"
      alignSelf={isOwned ? 'flex-end' : 'flex-start'}>
      <Box padding="0" gutter="0 0 10px 0" justify="space-between">
        <UserName>{user}</UserName>
        <MessageDate>{date}</MessageDate>
      </Box>
      <MessageBody>{message}</MessageBody>
    </Box>
  );
};

export default MessageListItem;
