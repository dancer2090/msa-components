import React from 'react';
import ReactDOM from 'react-dom';
import { getInitialProps, getComponent } from './config';

const baseProps = getInitialProps();
const Component = getComponent();

ReactDOM.render(
  <React.StrictMode>
    <Component  {...baseProps} />
  </React.StrictMode>,
  document.getElementById('root')
);

