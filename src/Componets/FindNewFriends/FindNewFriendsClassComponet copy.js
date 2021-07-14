import React from 'react'
import classes from './FindNewFriends.module.css'
import FindNewFriendsItem from './FindNewFriendsItem/FindNewFriendsItem'
import defaultUserImgpng from '../../assets/img/defaultUserImg.png'
import Preloader from '../common/preloader/Preloade'
import usersAPI from '../../API/API'

class FindNewFriends extends React.Component {


   componentDidMount() {
      console.log(this.props);
      this.props.setIsFetching(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)

         .then(data => {
            this.props.setIsFetching(false)

            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
         })



   }

   onPageChanged = (item) => {
      this.props.setIsFetching(true)
      this.props.setCurrentPage(item)
      usersAPI.getUsers(item, this.props.pageSize)
         .then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
         })

   }



   render() {




      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
      let pages = []
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i)
      }



      let NewFriends = this.props.data.map((item => {
         return <FindNewFriendsItem id={item.id} 
         follow={this.props.follow} 
         unfollow={this.props.unfollow} 
         followed={item.followed} 
         src={item.photos.small !== null ? item.photos.small : defaultUserImgpng} 
         name={item.name} followingInProgress={this.props.followingInProgress} 
         setFollowingInProgress ={this.props.setFollowingInProgress}></FindNewFriendsItem>
      })
      )


      return (

         <>
            {this.props.isFetching ? <Preloader /> : null}
            <div className={classes.friends_wrapper}>
               <div className={classes.total_page}>
                  {pages.slice(0, 20).map(item => {
                     return <span className={this.props.currentPage === item && classes.selected}
                        onClick={() => { this.onPageChanged(item) }}
                     >{item}</span>
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
         </>

      )
   }
}

export default FindNewFriends