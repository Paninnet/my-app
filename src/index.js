import store from './redux/reduxStore';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'


  ReactDOM.render(
    <React.StrictMode>
      <Provider store ={store}>
        <App State={store.getState()} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );








