import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import registerServiceWorker from './startServiceWorker';

ReactDOM.render(
  <App params={ window.location.search.substring(1) } />,
  document.getElementById('root')
);