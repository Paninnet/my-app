import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'







const Header = (props) => {
   return (
      <div className={classes.header}>
         <p className={classes.title}>PaninNet</p>
         <div className={classes.login}>
            {props.isAuth ? props.login : <NavLink to="/login">Войти</NavLink>}
            
         </div>
      </div>



   )
}

export default Header