import React from 'react'
import classes from './FindNewFriendsItem.module.css'
import { NavLink } from 'react-router-dom'

const FindNewFriendsItem = (props) => {
  
   return (
      <div className={classes.item_wrapper}>
         <div className={classes.item_img}>
            <NavLink to={`/mypage/${props.id}`}>


               <img className={classes.img} src={props.src}></img>
            </NavLink>
         </div>
         <div className={classes.item_fio}>
            <p className={classes.fio}>{props.name}</p>
            {props.followed ? <button onClick={() => { props.unfollow(props.id) }} className={classes.add}>Убрать из друзей</button>
               : <button onClick={() => { props.follow(props.id) }} className={classes.add}>Добавить в друзья</button>}

         </div>
      </div>
   )
}
export default FindNewFriendsItem