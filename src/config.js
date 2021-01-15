import { Chat, Example } from './lib';

const ACTIVE_COMPONENT = process.env.REACT_APP_COMPONENT;

// REACT_APP_COMPONENT keys
const CHAT = 'CHAT';
const EXAMPLE = 'EXAMPLE';

// join new component here
const components = {
  [CHAT]: Chat,
  [EXAMPLE]: Example,
};

// set initial props for the your component
const initialProps = {
  [CHAT]: {
    debug: true,
    portal: 'nurse', // admin, nurse
    mode: 'green', // green, orange
    apiUrl: 'http://localhost:3001',
    socketUrl: 'ws://localhost:3005',
  },
  [EXAMPLE]: {

  },
};

export const getInitialProps = () => initialProps[ACTIVE_COMPONENT];
export const getComponent = () => components[ACTIVE_COMPONENT];
