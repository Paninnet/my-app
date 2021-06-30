import React from 'react'
import AllPosts from './AllPosts/AllPosts'
import CreateNewPost from './CreateNewPost/CreateNewPost'
import MyData from './MyData/MyData'
import classes from './MyPage.module.css'


const MyPage = () => {
   return (
      <div className={classes.my_page_wrapper}>
         <MyData />
         <div className={classes.posts}>
            <CreateNewPost />
            <AllPosts message ="Привет, как ты ?"/>
            <AllPosts message ="2"/>
            <AllPosts message ="3"/>
            <AllPosts message ="4"/>
            <AllPosts message ="5"/>
            <AllPosts message ="6"/>
            <AllPosts message ="7"/>
         </div>

      </div>
   )
}
export default MyPage