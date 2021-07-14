import * as axios from 'axios'
import React from 'react'
import AllPosts from './AllPosts/AllPosts'
import CreateNewPost from './CreateNewPost/CreateNewPost'
import MyData from './MyData/MyData'
import classes from './MyPage.module.css'



class MyPage extends React.Component {
  

   componentDidMount() {
      let userId = this.props.match.params.userId
      if(!userId){
         userId=2
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
         this.props.setMyPage(response.data)
         
      })
   }


render() {

   let allPost = this.props.data.postsdata.map((item) => {
      return <AllPosts profile = {this.props.profile} message={item.postText} quantityLikes={item.quantityLikes}></AllPosts>
   })


   let AllMyData = this.props.data.mydata.map((item => {
      return <MyData profile = {this.props.profile} name={item.name} surname={item.surname} city={item.city} dateOfBirth={item.dateOfBirth}></MyData>
   })
   )
   return (

      <div className={classes.my_page_wrapper}>
         {AllMyData}
         <div className={classes.posts}>
            {/* <CreateNewPost SendNewPostBody ={this.props.SendNewPostBody} onTextAreaChange={this.props.onTextAreaChange} newPostText={this.props.data.newPostText} ></CreateNewPost> */}
            <CreateNewPost {...this.props} ></CreateNewPost>
            {allPost}
         </div>

      </div>
   )
}
}
export default MyPage