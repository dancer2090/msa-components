import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import Button from '../common/Button';
import Box from '../common/Box';
import ChatListItem from '../common/ChatListItem';
import { getChats } from '../../api';

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

  return(
    <Box width="30%">
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </Box>
  );
};

export default Sidebar;
