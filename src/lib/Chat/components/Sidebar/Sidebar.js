import React, { useContext } from 'react';
import { Container } from './styles';
import Button from '../Button';
import store from '../../store';

const Sidebar = () => {

  const { state = {} } = useContext(store);
  const { page, configuration } = state;

  return(
    <Container>
      <div>
        sidebar - {configuration && configuration.portal}
        <Button mode="dark" >Example button</Button>
      </div>
    </Container>
  );
};

export default Sidebar;
