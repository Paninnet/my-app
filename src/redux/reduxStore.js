import {combineReducers, createStore} from 'redux'
import  mypageReducer from './mypageReduce'
import friendsReducer from './friendsReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'



let reducers = combineReducers({
   mypage: mypageReducer,
   fiernds: friendsReducer,
   dialogs: dialogsReducer,
   users: usersReducer,
   auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store