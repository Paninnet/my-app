import React from 'react'
import {newMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) =>{
   

   let postNewMessage = (message) =>{
      props.dispatch(newMessageActionCreator(message))
   }

   let newMessage = (body) => {
      props.dispatch(updateNewMessageTextActionCreator(body));

   }
   
   return <Dialogs postNewMessage ={postNewMessage} newMessage ={newMessage} data ={props.state}></Dialogs >
}



export default DialogsContainer