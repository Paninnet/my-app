import React from 'react'
import classes from './FindNewFriendsItem.module.css'

const FindNewFriendsItem = (props) =>{

   
 

   return(
    <div className={classes.item_wrapper}>
       <div className ={classes.item_img}>
          <img  className={classes.img} src={props.src}></img>
       </div>
       <div className ={classes.item_fio}>
          <p className ={classes.fio}>{props.fullname}</p>
            {props.followed ? <button onClick={()=>{props.unfollow(props.id)}} className ={classes.add}>Убрать из друзей</button> 
            : <button onClick={()=>{props.follow(props.id)}} className ={classes.add}>Добавить в друзья</button> }
          
       </div>
    </div>
   )
}
export default FindNewFriendsItem