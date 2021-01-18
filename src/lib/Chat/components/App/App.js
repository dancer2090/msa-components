import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { setConfiguration } from '../../module/configuration/actions';
import { API } from 'aws-amplify';
import { getAPIConfig } from './config';
import TopBar from '../TopBar';
import Content from '../Content';
import AddChat from '../AddChat';

import { Container } from './styles';
import Preloader from '../common/Preloader';
import { actionConnected, actionDisconnected, actionInitFinished } from '../../module/application/actions';

const App = ({ configuration }) => {
  const dispatch = useDispatch();
  const { isInit } = useSelector(({ application }) => application);

  const { readyState } = useWebSocket(configuration.socketUrl, {
    onOpen: () => {
      console.info('socket connection opened');
      dispatch(actionConnected);
    },
    onClosed: () => {
      console.info('socket connection CLOSED');
      dispatch(actionDisconnected);
    },
    reconnectInterval: 10000,
    reconnectAttempts: 10,
    onError: e => console.error(e),
    onMessage: event => {
      console.info(`Websocket message`, event);
      const dataJson = event.data;
      const data = JSON.parse(dataJson);
      const type = data?.type || 'UNKNOWN';
      const body = data?.body || 'UNKNOWN';
      if (type === 'NEW_MESSAGE') {
        console.info(`New message `, body);
      }
    },
    //Will attempt to reconnect on all close events, such as server shutting down
    // shouldReconnect: closeEvent => true,
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  console.info(`Connection status: ${connectionStatus}`);

  useEffect(() => {
    dispatch(setConfiguration(configuration));
    const { apiUrl, token } = configuration;
    API.configure(
      getAPIConfig({
        endpoint: apiUrl,
        token,
      })
    );
    setTimeout(() => dispatch(actionInitFinished), 2000);
  }, [configuration, dispatch]);

  return isInit ? (
    <Preloader />
  ) : (
    <Container id="chat">
      <TopBar />
      <Content />
      <AddChat />
    </Container>
  );
};

export default App;
