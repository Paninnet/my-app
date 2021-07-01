import ContactItem from './Contact_item/Cotnact_item'
import Message_item from './Message_item/Message_item'
import classes from './Dialogs.module.css'

const Dialogs = () => {
   return(
      <div className = {classes.dialogs_wrapper}>
         <div className ={classes.contacts_wrapper}>
            <ContactItem name = 'Илья Панин'/>
            <ContactItem name = 'Ксения виноградова'/>
            <ContactItem name = 'Илья Панин'/>
            <ContactItem name = 'Ксения виноградова'/>
            <ContactItem name = 'Илья Панин'/>
            <ContactItem name = 'Ксения виноградова'/>
            <ContactItem name = 'Илья Панин'/>
            <ContactItem name = 'Ксения виноградова'/>
            <ContactItem name = 'Илья Панин'/>
            <ContactItem name = 'Ксения виноградова'/>
            <ContactItem name = 'Илья Панин'/>
            <ContactItem name = 'Ксения виноградова'/>
            <ContactItem name = 'Илья Панин'/>
            <ContactItem name = 'Ксения виноградова'/>
         
         </div>

         <div className = {classes.contact_message_wrapper}>
               <div className = {classes.contact_message}> </div>
               <Message_item text="Первое сообщение"/>
         </div>

      </div>

   )
}

export default Dialogs