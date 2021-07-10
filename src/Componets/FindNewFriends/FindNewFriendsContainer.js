import React from 'react'
import { connect } from 'react-redux'
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer'
import FindNewFriends from './FindNewFriendsClassComponet copy'


let mapStateToProsp = (_State) =>{
   

   return{
      data:_State.users.users,
      pageSize:_State.users.pageSize,
      totalUsersCount:_State.users.totalUsersCount,
      currentPage:_State.users.currentPage
      
   }
}
let mapDispatchToProps = (dispatch) =>{
   return{
      follow: (userId) =>{
         dispatch(followActionCreator(userId))
      },
      unfollow:(userId) => {
         dispatch(unfollowActionCreator(userId))
      },
      setUsers:(users) =>{
         dispatch(setUsersActionCreator(users))
      },
      setCurrentPage:(currentPage) =>{
         dispatch(setCurrentPageActionCreator(currentPage))
      },
      
      setTotalUsersCount:(totalUsers) =>{
         dispatch(setTotalUsersCountActionCreator(totalUsers))
      }
   }
}

let FindNewFriendContainer = connect (mapStateToProsp,mapDispatchToProps) (FindNewFriends)

export default FindNewFriendContainer