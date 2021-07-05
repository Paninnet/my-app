import React from 'react'
import ContactItem from './Contact_item/Cotnact_item'
import Message_item from './Message_item/Message_item'
import classes from './Dialogs.module.css'
import {newMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/state'

const Dialogs = (props) => {

   
  
   let newMessageRef = React.createRef()


   let postNewMessage = () =>{
    let message = newMessageRef.current.value
    props.dispatch(newMessageActionCreator(message))
   }

   let newMessage = () => {
      let body = newMessageRef.current.value
      props.dispatch(updateNewMessageTextActionCreator(body));
   }
   
   let allContact = props.state.contactsData.map((item) =>{
      return <ContactItem id={item.id} name={item.name}></ContactItem>
   })

   let allMessage = props.state.messageData.map((item) =>{
      return <Message_item id = {item.id} message ={item.message}></Message_item>
   })

   return(
      <div className = {classes.dialogs_wrapper}>
         <div className ={classes.contacts_wrapper}>
            {allContact}
         </div>
         <div className = {classes.contact_message_wrapper}>
            {allMessage}
            <textarea  onChange={newMessage} ref={newMessageRef} value={props.newMessageText}></textarea>
            <button onClick={postNewMessage}>Отправить</button>
         </div>
        

      </div>

   )
}

export default Dialogs