import {combineReducers, createStore} from 'redux'
import  mypageReducer from './mypageReduce'
import friendsReducer from './friendsReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
   mypage: mypageReducer,
   fiernds: friendsReducer,
   dialogs: dialogsReducer,
   users: usersReducer,
})

let store = createStore(reducers)

window.store = store

export default store