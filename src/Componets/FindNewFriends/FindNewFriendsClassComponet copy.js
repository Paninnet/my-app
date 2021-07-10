import React from 'react'
import classes from './FindNewFriends.module.css'
import FindNewFriendsItem from './FindNewFriendsItem/FindNewFriendsItem'
import * as axios from 'axios'
import defaultUserImgpng from '../../assets/img/defaultUserImg.png'

class FindNewFriends extends React.Component {

   

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (item) =>{
      this.props.setCurrentPage(item)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageSize}`)
      .then(response => {
         this.props.setUsers(response.data.items)
      })
   }


   render() {

      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
      let pages = []
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i)
      }


      let NewFriends = this.props.data.map((item => {
         return <FindNewFriendsItem id={item.id} follow={this.props.follow} unfollow={this.props.unfollow} followed={item.followed} src={item.photos.small !== null ? item.photos.small : defaultUserImgpng} name={item.name}></FindNewFriendsItem>
      })
      )


      return (


         <div className={classes.friends_wrapper}>
            <div className={classes.total_page}>
               {pages.slice(0,10).map(item => {
                  return <span className={this.props.currentPage === item && classes.selected} 
                   onClick={(e) =>{this.onPageChanged(item)}}>{item}</span>
               })}
            </div>
         
            <div className={classes.searchFriends}>
               <input type='text' className={classes.inputArea} placeholder="Поиск друзей"></input>
            </div>
            <div className={classes.FindNewFriendsItem_wrapper}>
               {NewFriends}
            </div>
            <div className={classes.showMore}>
               <button className={classes.showMore_button} >Показать еще</button>
            </div>


         </div >
      )
   }
}

export default FindNewFriends