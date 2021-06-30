import React from 'react'
import classes from './SideBar.module.css'

const SideBar = () => {
   return (
      <div className={classes.sidebar_wrapper}>
         <p className={classes.side_bar_wrapper__item}>Моя страница</p>
         <p className={classes.side_bar_wrapper__item}>Сообщения</p>
         <p className={classes.side_bar_wrapper__item}>Друзья</p>
         <p className={classes.side_bar_wrapper__item}>Музыка</p>
      </div>
   )
}

export default SideBar