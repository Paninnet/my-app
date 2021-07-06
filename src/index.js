import store from './redux/reduxStore';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = (State) => {

  ReactDOM.render(
    <React.StrictMode>
      
      <App  State ={store.getState()} dispatch ={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}





rerenderEntireTree(store.getState)
store.subscribe(() =>{
  let state = store.getState
  rerenderEntireTree(state)
})



