import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import ChatListItem from '../common/ChatListItem';
import SidebarHeader from './components/SidebarHeader';
import { getChats } from '../../module/chat/actions';
import Preloader from '../common/Preloader';
import Box from '../common/Box';
import { ChatWrapper } from './styles';
import { selectChat } from '../../module/application/actions';

const Sidebar = () => {
  // const { state = {} } = useContext(store);
  // const { page, configuration } = state;
  // const { portal = 'set the portal' } = useSelector(({ configuration }) => configuration);
  const {
    chatAction: {
      params: { chatId: activeChatId },
    },
  } = useSelector(({ application }) => application);
  const {
    chatsInit,
    chats: allChats,
    entities: { chats, users, messages },
  } = useSelector(({ chat }) => chat);

  const dispatch = useDispatch();

  useEffect(() => {
    getChats()(dispatch);
  }, [dispatch]);

  const onSelectChat = id => () => {
    selectChat(id)(dispatch);
  };

  return (
    <Box width="30%" minWidth="400px" height="100%" backgroundColor="white">
      <SidebarHeader />
      {chatsInit ? (
        <Preloader />
      ) : (
        <ChatWrapper align="flex-start" column nowrap>
          {allChats.map((chatId, index) => {
            const chat = chats[chatId];
            const createdAt = dayjs(chat.createdAt);
            const user = users[chat.user];
            const rmOwnerArr = chat.chat_users.filter(({ user: chatUserId }) => chatUserId !== chat.user); //userId deeply nested due Sequelize
            const chatUser =
              rmOwnerArr.length && rmOwnerArr[0].user ? users[rmOwnerArr[0].user] : null; //userId deeply nested
            const name = chatUser
              ? `${chatUser?.given_name?.substr(0, 1).toUpperCase()}${chatUser?.family_name
                  ?.substr(0, 1)
                  .toUpperCase()}`
              : '...';
            const chatMessages =
              chat.messages && Array.isArray(chat.messages) ? chat.messages.map(messageId => messages[messageId]) : [];
            const lastMessage = chatMessages.length > 0 ? chatMessages[0] : { description: 'no messages yet' };
            const lastMessageUser = lastMessage ? users[lastMessage?.user] : null;
            return (
              <ChatListItem
                onClick={onSelectChat(chatId)}
                key={`chat-${chatId}`}
                title={chat.name}
                lastUser={
                  lastMessageUser
                    ? `${
                        lastMessage?.user_id === user.id
                          ? 'You: '
                          : `${lastMessageUser?.given_name} ${lastMessageUser?.family_name}: `
                      }`
                    : ''
                }
                lastMessage={lastMessage?.description}
                name={name}
                type="user"
                date={createdAt.isSame(dayjs(), 'day') ? createdAt.format('hh:mm a') : createdAt.format('M/D/YYYY')}
                active={chatId === activeChatId}
              />
            );
          })}
        </ChatWrapper>
      )}
    </Box>
  );
};

export default Sidebar;
