import React from 'react';
import TopBar from '../TopBar';
import Content from '../Content';

import { Container } from './styles';


const App = () => {
  return (
    <Container>
      <TopBar />
      <Content />
    </Container>
  );
};

export default App;
