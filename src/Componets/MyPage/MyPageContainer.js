import React from 'react'
import { connect } from 'react-redux'
import { onTextAreaChangeActionCreator, SendPOstActionCreatot, setMyPageActionCreator } from '../../redux/mypageReduce'
import MyPage from './MyPage'
import { withRouter } from 'react-router-dom';

let mapStateToProsp = (_State) => {
   console.log(_State);
   return{
      data:_State.mypage,
      profile:_State.mypage.data
   }
}

let mapDispatchToProps = (dispatch) =>{
   return{
      onTextAreaChange:(body) =>{
         dispatch(onTextAreaChangeActionCreator(body))
      },
      SendNewPostBody:(cuurentValue,quantityLikes) =>{
         dispatch(SendPOstActionCreatot(cuurentValue,quantityLikes))
      },
      setMyPage:(data)=>{
         dispatch(setMyPageActionCreator(data))
      }
   }
}

let WithUrlDataContainerComponent=withRouter(MyPage)

let MyPageContainer = connect (mapStateToProsp, mapDispatchToProps) (WithUrlDataContainerComponent)



export default MyPageContainer