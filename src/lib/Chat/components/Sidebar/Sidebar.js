import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import ChatListItem from '../common/ChatListItem';
import SidebarHeader from './components/SidebarHeader';
import { getChats } from '../../module/chat/actions';
import Preloader from '../common/Preloader';
import Box from '../common/Box';
import { ChatWrapper } from './styles';

const Sidebar = () => {
  // const { state = {} } = useContext(store);
  // const { page, configuration } = state;
  // const { portal = 'set the portal' } = useSelector(({ configuration }) => configuration);
  const { chatsInit, chats, entities } = useSelector(({ chat }) => chat);

  const dispatch = useDispatch();

  useEffect(() => {
    getChats()(dispatch);
  }, [dispatch]);

  return (
    <Box width="30%" height="100%">
      <SidebarHeader />
      {chatsInit ? (
        <Preloader />
      ) : (
        <ChatWrapper align="flex-start" column nowrap>
          {chats.map((chatId, index) => {
            const chat = entities.chats[chatId];
            const createdAt = dayjs(chat.createdAt);
            const user = entities.users[chat.user];
            const chatUser = chat.chat_users[0]?.user;
            const name = chatUser
              ? `${chatUser.given_name.substr(0, 1).toUpperCase()}${chatUser.family_name.substr(0, 1).toUpperCase()}`
              : '...';
            const messages = chat.messages.map(messageId => entities.messages[messageId]);
            const lastMessage = messages.length > 0 ? messages[0] : null;
            const lastMessageUser = entities.users[lastMessage.user];
            return (
              <ChatListItem key={`chat-${chatId}`}
                title={chat.name}
                lastUser={`${
                  lastMessage.user_id === user.id
                    ? 'You: '
                    : `${lastMessageUser.given_name} ${lastMessageUser.family_name}: `
                }`}
                lastMessage={lastMessage.description}
                name={name}
                type="user"
                date={createdAt.isSame(dayjs(), 'day') ? createdAt.format('hh:mm a') : createdAt.format('M/D/YYYY')}
              />
            );
          })}
        </ChatWrapper>
      )}
    </Box>
  );
};

export default Sidebar;
