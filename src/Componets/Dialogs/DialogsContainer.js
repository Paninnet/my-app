import React from 'react'
import {newMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'



let mapStateToProps = (_State) => {

   return{
      data:_State.dialogs
   }
}

let mapDispacthToProps = (dispatch) => {

   return{
      postNewMessage: (message) => {
         dispatch(newMessageActionCreator(message))
      },
      newMessage: (body) =>{
         dispatch(updateNewMessageTextActionCreator(body));
      }
   }
}

let DialogsContainer = connect (mapStateToProps, mapDispacthToProps) (Dialogs)


export default DialogsContainer