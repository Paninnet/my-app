import ContactItem from './Contact_item/Cotnact_item'
import Message_item from './Message_item/Message_item'
import classes from './Dialogs.module.css'

const Dialogs = () => {

   
   let contactsData = [
      {id: 1, name:"Илья Панин"},
      {id: 2, name:"Ксения Виноградова"},
      {id: 3, name:"Евгений Андрейченко"},
      {id: 4, name:"Мама"},
      {id: 5, name:"Папа"},
      {id: 6, name:"Маша"},
      {id: 7, name:"Теди"},
      {id: 8, name:"Майкл"},
      {id: 9, name:"Стефан"},
      {id: 10, name:"Ибукентий"},
      {id: 11, name:"Вера"},
      {id: 12, name:"Урод"},
      {id: 13, name:"Даша"},
      {id: 14, name:"Наташа"},
      {id: 15, name:"Катя"},
   ]

   let messageData = [
      {id: 1, message: "Хей как ты?"},
      {id: 2, message:"НОРМ"},
      {id: 3, message:"А ТЫ"},
      {id: 4, message:"Fuck RUDN"},
      {id: 5, message:"WEED"},
      {id: 6, message:"PEacE"},
   ]

   
   let allContact = contactsData.map((item) =>{
      return <ContactItem id={item.id} name={item.name}></ContactItem>
   })

   let allMessage = messageData.map((item) =>{
      return <Message_item id = {item.id} message ={item.message}></Message_item>
   })

   return(
      <div className = {classes.dialogs_wrapper}>
         <div className ={classes.contacts_wrapper}>
            {allContact}
         </div>
         <div className = {classes.contact_message_wrapper}>
            {allMessage}
         </div>

      </div>

   )
}

export default Dialogs