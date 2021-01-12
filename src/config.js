import { Chat, Example } from './lib';

export const ACTIVE_COMPONENT = process.env.REACT_APP_COMPONENT;

// REACT_APP_COMPONENT keys
export const CHAT = 'CHAT';
export const EXAMPLE = 'EXAMPLE';

// join new component here
const components = {
  [CHAT]: Chat,
  [EXAMPLE]: Example,
}

const initialProps = {
  [CHAT]: {
    portal: 'admin', // admin, nurse
    mode: 'orange', // green, orange
    apiUrl: 'http://localhost:3001',
    socketUrl: 'ws://localhost:3005', 
  },
  [EXAMPLE]: {

  },
};

export const getInitialProps = () => initialProps[ACTIVE_COMPONENT];
export const getComponent = () => components[ACTIVE_COMPONENT];
