import '@dojo/shim/Promise';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './css/main.scss';

const addDOMNode = () => {
  const appNode = document.createElement('div');
  appNode.id = 'app';
  document.body.appendChild(appNode);
  return appNode;
};

/**
 * React portion of application
 */
ReactDOM.render(
  <App />,
  addDOMNode()
);
