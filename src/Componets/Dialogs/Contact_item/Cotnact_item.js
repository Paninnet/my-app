import classes from './Contact_item.module.css'
import { NavLink } from 'react-router-dom'
const ContactItem = (props) =>{
   return (
      <div className = {classes.conact_item}>
         <div className={classes.litle_foto}></div>
         <NavLink to ={'/dialogs/'+props.id} activeClassName={classes.activeLink} className={classes.MyFIO}>{props.name}</NavLink>
      </div>
      
   )
}

export default ContactItem