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
    <Box nowrap scroll direction="column-reverse" padding="32px 0 0 0">
      {chat && Array.isArray(chat.messages) && chat.messages.length ? (
        chat.messages.map(messageId => {
          const message = messages[messageId];
          const user = users[message.user];
          const createdAt = dayjs(message.createdAt);

          return (
            <MessageListItem
              key={`message-${messageId}`}
              message={message.description}
              date={
                createdAt.isSame(dayjs(), 'day') ? createdAt.format('hh:mm a') : createdAt.format('hh:mma, MM/DD/YYYY')
              }
              isOwned={chat.user === message.user}
              user={`${user?.given_name} ${user?.family_name}`}
            />
          );
        })
      ) : (
        <Box column justify="center" align="center">
          No messages yet...
        </Box>
      )}
    </Box>
  );
};

export default MessageList;
