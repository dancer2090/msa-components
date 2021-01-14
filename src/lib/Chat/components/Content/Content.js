import React from 'react';
import { Container } from './styles';
import Sidebar from '../Sidebar';
import Chat from '../Chat';

const Content = () => {
  return(
    <Container>
      <Sidebar />
      <Chat />
    </Container>
  );
};

export default Content;
