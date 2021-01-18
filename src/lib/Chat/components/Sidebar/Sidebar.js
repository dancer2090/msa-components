import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getChats } from '../../api';
import Box from '../common/Box';
import ChatListItem from '../common/ChatListItem';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {

  // const { state = {} } = useContext(store);
  // const { page, configuration } = state;
  const { portal = 'set the portal' } = useSelector(({ configuration }) => configuration);

  const fetchInfo = async () => {
    setTimeout(async () => {
      const chats = await getChats();
      console.log(chats);
    }, 3000);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <Box width="30%" height="100%" ba>
      <SidebarHeader />
      <ChatListItem
        title="Chat with some users. Pavel test, Pavel test, Pavel test, Pavel test, Pavel test, Pavel test, Pavel test,"
        subtitle="You: test message"
        name="PT"
        type="group"
        date="18.01.2021"
      />
      <ChatListItem title="Chat with some" subtitle="Nurse: test message" name="PT" date="8:15 pm" onClick={() => console.info(`Clicked...`)} />
      <ChatListItem title="Chat with some" subtitle="You: test message" name="PT" date="8:15 pm" />
      <ChatListItem title="Chat with some" subtitle="You: test message" name="PT" date="8:15 pm" />
      <ChatListItem title="Chat with some" subtitle="You: test message" name="PT" date="8:15 pm" />
      <ChatListItem title="Chat with some" subtitle="You: test message" name="PT" date="8:15 pm" />
      <ChatListItem title="Chat with some" subtitle="You: test message" name="PT" date="8:15 pm" />
    </Box>
  );
};

export default Sidebar;
