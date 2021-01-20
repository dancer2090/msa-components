import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Box from '../../common/Box';
import MessageListItem from './MessageListItem';

const MessageList = ({ chatId }) => {
  const {
    entities: { messages, users, chats },
  } = useSelector(({ chat }) => chat);

  const chat = chats[chatId];

  console.info(`Selected chat`, chat);

  return (
    <Box column nowrap scroll direction="column-reverse" padding="0 0 16px 0" >
      {chat.messages.map(messageId => {
        const message = messages[messageId];
        const user = users[message.user];

        return (
          <MessageListItem
            key={`message-${messageId}`}
            message={message.description}
            date={dayjs(message.createdAt).format('hh:mma, MM/DD/YYYY')}
            isOwned={chat.user === message.user}
            user={`${user?.given_name} ${user?.family_name}`}
          />
        );
      })}
    </Box>
  );
};

export default MessageList;
