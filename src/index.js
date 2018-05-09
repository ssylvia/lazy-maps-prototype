import '@dojo/shim/Promise';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './css/main.scss';

/**
 * React portion of application
 */
// note we use hydrate() instead of render for SSR apps
ReactDOM.hydrate(
  <App />,
  document.getElementById('app')
);
