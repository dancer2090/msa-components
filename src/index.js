import React from 'react';
import ReactDOM from 'react-dom';
import { getInitialProps, getComponent } from './config';

const baseProps = getInitialProps();
const Component = getComponent();

ReactDOM.render(
  <React.StrictMode>
    {/*<div style={{ position: 'relative', height: '85vh', width: '85vw', border: '2px solid black' }}>*/}
      <Component {...baseProps} />
    {/*</div>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
