import React from 'react'
import classes from './FindNewFriendsItem.module.css'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

const FindNewFriendsItem = (props) => {
  console.log(props);

   return (
      <div className={classes.item_wrapper}>
         <div className={classes.item_img}>
            <NavLink to={`/mypage/${props.id}`}>
               <img className={classes.img} src={props.src}></img>
            </NavLink>
         </div>
         <div className={classes.item_fio}>
            <p className={classes.fio}>{props.name}</p>
            {props.followed ?
               <button disabled ={props.followingInProgress.some(id => id=== props.id)} onClick={() => {
                  props.setFollowingInProgress(true, props.id)

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                     withCredentials: true,
                     headers :{
                        "API-KEY": "dc56557c-d203-4ef2-b475-c27037449547"
                     }
                  }).then(response => {
                     if (response.data.resultCode === 0) {
                        props.unfollow(props.id)
                     }
                     props.setFollowingInProgress(false, props.id)
                  })


               }} className={classes.add}>Убрать из друзей</button>
               : <button disabled ={props.followingInProgress.some(id => id=== props.id )}onClick={() => {
                  props.setFollowingInProgress(true, props.id)

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                     withCredentials: true,
                     headers :{
                        "API-KEY": "dc56557c-d203-4ef2-b475-c27037449547"
                     }
                  }).then(response => {
                     if (response.data.resultCode === 0) {
                        props.follow(props.id)
                     }
                     props.setFollowingInProgress(false, props.id)
                  })

               }} className={classes.add}>Добавить в друзья</button>}

         </div>
      </div>
   )
}
export default FindNewFriendsItem