import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './SideBar.module.css'

const SideBar = () => {
   return (
      <div className={classes.sidebar_wrapper}>
         <NavLink to ="/mypage" className={classes.side_bar_wrapper__item} activeClassName = {classes.activeLink}>Моя страница</NavLink>
         <NavLink to ="/dialogs" className={classes.side_bar_wrapper__item} activeClassName = {classes.activeLink} >Сообщения</NavLink>
         <NavLink to ="/friends" className={classes.side_bar_wrapper__item} activeClassName = {classes.activeLink} >Мои Друзья</NavLink>
         <NavLink to='/newfriends'  className={classes.side_bar_wrapper__item} activeClassName = {classes.activeLink}>Новые Друзья</NavLink>
         <NavLink to ="/musics" className={classes.side_bar_wrapper__item} activeClassName = {classes.activeLink} >Музыка</NavLink>
      </div>
   )
}

export default SideBar