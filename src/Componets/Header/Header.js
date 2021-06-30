import React from 'react'
import classes from './Header.module.css'





const Header = () => {
   return (
      <div className= {classes.header}>
         <p className ={classes.title}>PaninNet</p>
      </div>
      
      
   )
   }
   window.addEventListener("scroll", ()=>{
      let y = window.pageYOffset
      console.log(y);
   })
export default Header