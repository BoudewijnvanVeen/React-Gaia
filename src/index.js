import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App params={ window.location.search.substring(1) } />,
  document.getElementById('root')
);

registerServiceWorker();
