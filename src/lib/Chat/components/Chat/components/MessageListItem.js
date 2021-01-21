import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Box from '../../common/Box';
import { MessageBody, MessageDate, UserName } from './styles';
import { replaceLineBreaks } from '../../../helpers/string-parse';

const MessageListItem = ({ message = '...', isOwned = true, user, date = '...' }) => {

  return (
    <Box
      column
      nowrap
      height="auto"
      maxWidth="80%"
      backgroundColor="white"
      margin="8px 16px"
      padding="16px"
      borderRadius="10px"
      alignSelf={isOwned ? 'flex-end' : 'flex-start'}>
      <Box padding="0" gutter="0 0 10px 0" justify="space-between">
        <UserName>{user}</UserName>
        <MessageDate>{date}</MessageDate>
      </Box>
      <MessageBody>{ReactHtmlParser(replaceLineBreaks(message))}</MessageBody>
    </Box>
  );
};

export default MessageListItem;
