import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {setAuthUserDataActionCreator} from '../../redux/authReducer'

class HeaderContainer extends React.Component{

   componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      {
         withCredentials:true
      })
      .then(response => {
         debugger
         if (response.data.resultCode === 0){
            let {id, email, login} = response.data.data
            this.props.setAuthUserData(id, email, login)
         }
      })
   }

   render(){
      return(
         <Header {...this.props}/>
      )
     
   }
}

const mapStateToProps = (_State) => {
   return{
      isAuth:_State.auth.isAuth,
      login:_State.auth.login,
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      setAuthUserData:(userId, email, login) =>{
         dispatch(setAuthUserDataActionCreator(userId, email, login))
      }
   }
}


export default connect (mapStateToProps, mapDispatchToProps ) (HeaderContainer)