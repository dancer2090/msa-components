import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setConfiguration } from '../../module/configuration/actions';
import { API } from 'aws-amplify';
import { getAPIConfig } from './config';
import TopBar from '../TopBar';
import Content from '../Content';

import { Container } from './styles';


const App = ({ configuration }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConfiguration(configuration));
    const { apiUrl, token } = configuration;
    API.configure(getAPIConfig({
      endpoint: apiUrl,
      token,
    }));
  }, [configuration]);

  return (
    <Container>
      <TopBar />
      <Content />
    </Container>
  );
};

export default App;
