import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {newPost} from './redux/state'
import {updateNewPostText} from './redux/state'
import {newMesage, updateNewMessageText } from './redux/state'

export let rerenderEntireTree = (State) => {
  ReactDOM.render(
    <React.StrictMode>
      
      <App  State ={State} updateNewPostText ={updateNewPostText} 
      newPost ={newPost} 
      updateNewMessageText ={updateNewMessageText}
      newMesage = {newMesage}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}




