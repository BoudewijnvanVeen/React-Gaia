import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App params={ window.location.search.substring(1) } />,
  document.getElementById('root')
);
