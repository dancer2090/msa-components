import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import Button from '../Button';
import store from '../../store';

const Sidebar = () => {

  // const { state = {} } = useContext(store);
  // const { page, configuration } = state;
  const { portal = 'set the portal' } = useSelector(({ configuration }) => configuration);

  return(
    <Container>
      <div>
        sidebar - {portal}
        <Button mode="dark" >Example button</Button>
      </div>
    </Container>
  );
};

export default Sidebar;
