import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import Button from '../common/Button';
import store from '../../store';
import Box from '../common/Box';
import ChatListItem from '../common/ChatListItem';

const Sidebar = () => {

  // const { state = {} } = useContext(store);
  // const { page, configuration } = state;
  const { portal = 'set the portal' } = useSelector(({ configuration }) => configuration);

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
