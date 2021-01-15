import Box from '../Box';
import Avatar from '../Avatar';
import { Title, SubTitle } from './styles';
import React from 'react';


const ChatListItem = props => {

  const { title, subtitle } = props;

  return <Box bordered gutter='4px' align='center'>
    <Avatar username='Pavel Test' />
    <Box column width='70%' justify='center'>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Box>
  </Box>;

};
export default ChatListItem;
