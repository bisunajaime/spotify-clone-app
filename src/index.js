import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppDataLayer } from './state/AppDataLayer';
import reducer, { initialState } from './state/reducer';

ReactDOM.render(
  <React.StrictMode>
    <AppDataLayer initialState={initialState} reducer={reducer}>
      <App />
    </AppDataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);