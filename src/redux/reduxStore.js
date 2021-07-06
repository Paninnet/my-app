import {combineReducers, createStore} from 'redux'
import  mypageReducer from './mypageReduce'
import friendsReducer from './friendsReducer'
import dialogsReducer from './dialogsReducer'

let reducers = combineReducers({
   mypage: mypageReducer,
   fiernds: friendsReducer,
   dialogs: dialogsReducer
})

let store = createStore(reducers)

export default store