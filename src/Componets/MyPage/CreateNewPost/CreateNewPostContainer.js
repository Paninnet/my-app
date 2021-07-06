import React from 'react'
import { SendPOstActionCreatot, onTextAreaChangeActionCreator } from '../../../redux/mypageReduce'
import CreateNewPost from './CreateNewPost'


const CreateNewPostContainer = (props) => {
   
   let SendNewPostBody = (cuurentValue,quantityLikes) => {
      props.dispatch(SendPOstActionCreatot(cuurentValue, quantityLikes))
   }

   let onTextAreaChange = (body) => {
      props.dispatch(onTextAreaChangeActionCreator(body))
   }


   return (
      <CreateNewPost onTextAreaChange = {onTextAreaChange} SendNewPostBody= {SendNewPostBody} newPostText={props} />
   )
}

export default CreateNewPostContainer