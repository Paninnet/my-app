import classes from './CreateNewPost.module.css'
import React from 'react'

const CreateNewPost = () =>{


   return (
      <div className = {classes.CreateNewPost_wrapper}>
          <img className={classes.litle_foto} src='https://sun9-70.userapi.com/impg/c855424/v855424410/214842/870RM7NzcZc.jpg?size=810x1080&quality=96&sign=6109123b1926fe461195e266b728c510&type=album' />
          <textarea   className ={classes.placeholder}   placeholder='Что нового ?'></textarea>
          <button >Опубликовать</button>
      </div>
   )
}

export default CreateNewPost