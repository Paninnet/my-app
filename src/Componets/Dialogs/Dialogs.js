import ContactItem from './Contact_item/Cotnact_item'
import Message_item from './Message_item/Message_item'
import classes from './Dialogs.module.css'

const Dialogs = () => {
   return(
      <div className = {classes.dialogs_wrapper}>
         <div className ={classes.contacts_wrapper}>
            <ContactItem name = 'Илья Панин' id = '1'/>
            <ContactItem name = 'Ксения Виноградова' id = '2'/>
            <ContactItem name = 'Евгений Андрейченко' id = '3'/>
            <ContactItem name = 'Мама' id = '4'/>
            <ContactItem name = 'Папа' id = '5'/>
            <ContactItem name = 'Маша' id = '6'/>
            <ContactItem name = "Теди" id = '7'/>
            <ContactItem name = "Майкл" id = '8'/>
            <ContactItem name = "Стефан" id = "9" />
            <ContactItem name = 'Маша' id = '6'/>
            <ContactItem name = "Теди" id = '7'/>
            <ContactItem name = "Майкл" id = '8'/>
            <ContactItem name = "Стефан" id = "9" />
            <ContactItem name = "Стефан" id = "9" />
            <ContactItem name = 'Маша' id = '6'/>
            <ContactItem name = "Теди" id = '7'/>
            <ContactItem name = "Майкл" id = '8'/>
            <ContactItem name = "Стефан" id = "9" />
       
         
         </div>

         <div className = {classes.contact_message_wrapper}>
               <div className = {classes.contact_message}> </div>
               <Message_item text="Первое сообщение"/>
         </div>

      </div>

   )
}

export default Dialogs