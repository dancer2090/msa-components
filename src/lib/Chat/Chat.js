import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './components/App/App';
import configureStore from './module';
import theme from './theme';

// import { StateProvider } from './store';

// const Chat = (props) => (
//   <StateProvider configuration={props}>
//     <App />
//   </StateProvider>
// );
const store = configureStore();

const Chat = (props) => (
  <ThemeProvider theme={theme[props.mode || 'orange']}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

export default Chat;
