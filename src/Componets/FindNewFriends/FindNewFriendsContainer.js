import React from 'react'
import { connect } from 'react-redux'
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer'
import FindNewFriends from './FindNewFriends'


let mapStateToProsp = (_State) =>{
   

   return{
      data:_State.users.users
      
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
      setUsers: (users) =>{
         dispatch(setUsersActionCreator(users))
      }
   }
}

let FindNewFriendContainer = connect (mapStateToProsp,mapDispatchToProps) (FindNewFriends)

export default FindNewFriendContainer