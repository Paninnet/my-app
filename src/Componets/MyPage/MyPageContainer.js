import React from 'react'
import { connect } from 'react-redux'
import { onTextAreaChangeActionCreator, SendPOstActionCreatot } from '../../redux/mypageReduce'
import MyPage from './MyPage'

let mapStateToProsp = (_State) => {
   return{
      data:_State.mypage
   }
}

let mapDispatchToProps = (dispatch) =>{
   return{
      onTextAreaChange:(body) =>{
         dispatch(onTextAreaChangeActionCreator(body))
      },
      SendNewPostBody:(cuurentValue,quantityLikes) =>{
         dispatch(SendPOstActionCreatot(cuurentValue,quantityLikes))
      }
   }
}

let MyPageContainer = connect (mapStateToProsp, mapDispatchToProps) (MyPage)

export default MyPageContainer