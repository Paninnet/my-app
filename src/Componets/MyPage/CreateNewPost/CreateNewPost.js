import classes from './CreateNewPost.module.css'
import React from 'react'
import {SendPOstActionCreatot,onTextAreaChangeActionCreator} from '../../../redux/mypageReduce'


const CreateNewPost = (props) =>{
   debugger

   console.log(props);
   let newPost = React.createRef()

   let SendNewPostBody = () =>{
   let cuurentValue = newPost.current.value 
   let quantityLikes = parseInt(Math.random() * (100-1))
   props.SendNewPostBody(cuurentValue,quantityLikes)
   }

   let onTextAreaChange = () =>{
      let body = newPost.current.value
      props.onTextAreaChange(body)
   }
   
   return (
      <div className = {classes.CreateNewPost_wrapper}>
          <img className={classes.litle_foto} src='https://sun9-70.userapi.com/impg/c855424/v855424410/214842/870RM7NzcZc.jpg?size=810x1080&quality=96&sign=6109123b1926fe461195e266b728c510&type=album' />
          <textarea ref={newPost}  onChange={onTextAreaChange} className ={classes.placeholder}  value ={props.newPostText.newPostText} placeholder='Что нового ?'></textarea>
          <button onClick={SendNewPostBody} >Опубликовать</button>
      </div>
   )
}

export default CreateNewPost