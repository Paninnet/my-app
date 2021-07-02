import React from 'react'
import AllPosts from './AllPosts/AllPosts'
import CreateNewPost from './CreateNewPost/CreateNewPost'
import MyData from './MyData/MyData'
import classes from './MyPage.module.css'


const MyPage = (props) => {

      let allPost = props.state.postsdata.map((item) => {
         return <AllPosts message ={ item.postText} quantityLikes ={ item.quantityLikes}></AllPosts>
      })

      
      let AllMyData = props.state.mydata.map ((item =>{
         return <MyData name= {item.name} surname ={item.surname} city ={item.city} dateOfBirth = {item.dateOfBirth}></MyData>
      })
      )
   return (
      
      <div className={classes.my_page_wrapper}>
         {AllMyData}
         <div className={classes.posts}>
            <CreateNewPost />
            {allPost}
         </div>

      </div>
   )
}
export default MyPage