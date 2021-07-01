import React from 'react'
import AllPosts from './AllPosts/AllPosts'
import CreateNewPost from './CreateNewPost/CreateNewPost'
import MyData from './MyData/MyData'
import classes from './MyPage.module.css'


const MyPage = () => {

   const postsdata = [
      {id:1, postText:"Привет, как тsы ?",quantityLikes:1 },
      {id:2, postText:"2",quantityLikes:2 },
      {id:3, postText:"3",quantityLikes:3 },
      {id:4, postText:"4",quantityLikes:4 },
      {id:5, postText:"5",quantityLikes:5 },
      {id:6, postText:"6",quantityLikes:6 },
      {id:7, postText:"7",quantityLikes:7 },
   ] 

      let allPost = postsdata.map((item) => {
         return <AllPosts message ={ item.postText} quantityLikes ={ item.quantityLikes}></AllPosts>
      })

   return (
      <div className={classes.my_page_wrapper}>
         <MyData />
         <div className={classes.posts}>
            <CreateNewPost />
            {allPost}
         </div>

      </div>
   )
}
export default MyPage