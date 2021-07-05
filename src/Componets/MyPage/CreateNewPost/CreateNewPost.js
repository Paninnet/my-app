import classes from './CreateNewPost.module.css'
import React from 'react'

const CreateNewPost = (props) =>{
   let newPost = React.createRef()

   let SendNewPostBody = () =>{
      
   props.dispatch({type :"NEWPOST",message:newPost.current.value,quantityLikes:70})      
   }

   let onTextAreaChange = () =>{
      props.dispatch ({type : "UPDATENEWPOSTTEXT",body:newPost.current.value})
   }

   
   return (
      <div className = {classes.CreateNewPost_wrapper}>
          <img className={classes.litle_foto} src='https://sun9-70.userapi.com/impg/c855424/v855424410/214842/870RM7NzcZc.jpg?size=810x1080&quality=96&sign=6109123b1926fe461195e266b728c510&type=album' />
          <textarea ref={newPost}  onChange={onTextAreaChange} className ={classes.placeholder}  value ={props.newPostText} placeholder='Что нового ?'></textarea>
          <button onClick={SendNewPostBody} >Опубликовать</button>
      </div>
   )
}

export default CreateNewPost