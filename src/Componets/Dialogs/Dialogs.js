import React from 'react'
import ContactItem from './Contact_item/Cotnact_item'
import Message_item from './Message_item/Message_item'
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
   debugger


   let newMessageRef = React.createRef()


   let postNewMessage = () =>{
    let message = newMessageRef.current.value
    props.postNewMessage(message)
  
   }

   let newMessage = () => {
      let body = newMessageRef.current.value
      props.newMessage(body)

   }
   
   debugger
   let allContact = props.data.contactsData.map((item) =>{
      return <ContactItem id={item.id} name={item.name}></ContactItem>
   })

   let allMessage = props.data.messageData.map((item) =>{
      return <Message_item id = {item.id} message ={item.message}></Message_item>
   })

   return(
      <div className = {classes.dialogs_wrapper}>
         <div className ={classes.contacts_wrapper}>
            {allContact}
         </div>
         <div className = {classes.contact_message_wrapper}>
            {allMessage}
            <textarea  onChange={newMessage} ref={newMessageRef} value={props.data.newMessageText}></textarea>
            <button onClick={postNewMessage}>Отправить</button>
         </div>
        

      </div>

   )
}

export default Dialogs