
import classes from './Friends_list.module.css'

const Frineds_list = (props) => {

   return (
      <div className={classes.friends_item_wrapper}>
         <div className={classes.frineds_item}>
            <div className={classes.frindsImg}>
               <img className={classes.frinedIMG} src={props.img} alt="ava"></img>
            </div>
            <div className={classes.friendsInfo}>
               <p className={classes.frindsFIO}>{props.name} {props.surname}</p>
            </div>
         </div>
      </div>
   )
}
export default Frineds_list