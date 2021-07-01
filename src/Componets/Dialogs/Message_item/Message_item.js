import classes from './Message_item.module.css'

const Message_item = (props) =>{
   return(
      <div className = {classes.contact_message}>
         <p className={classes.message}>{props.message}</p> 
      </div>

   )
}
export default Message_item