const FOLLOW ="FOLLOW"
const UNFOLLOW ="UNFOLLOW"
const SETUSERS ="SETUSERS"
const SETCURRENTPAGE = 'SETCURRENTPAGE'
const SETTOTALUSERSCOUNT = "SETTOTALUSERSCOUNT"
const ISFETCHING = "ISFETCHING"

let initialState = {
   users: [],
   pageSize:15,
   totalUsersCount:0,
   currentPage:1,
   isFetching:true
   
}
const usersReducer =(state= initialState, action) =>{

   switch (action.type) {
      case FOLLOW :
         return {...state, 
            users : state.users.map(user => {
               if (user.id === action.userId){
                  return {...user, followed:true}
               }
               return user}) }

      case UNFOLLOW :
         return {...state, 
            users : state.users.map(user => {
               if (user.id === action.userId){
                  return {...user, followed:false}
               }
               return user}) }
      case SETUSERS: 
         return {...state,users:[...action.users]}
      
      case SETCURRENTPAGE :
         return{...state, currentPage:action.currentPage}
      case SETTOTALUSERSCOUNT:{
         
         return {...state,totalUsersCount:action.totalUsers}
      }
      case ISFETCHING:
         return {...state, isFetching:action.isFetching}
      default:
         return {...state};
   }

}
export default usersReducer

export const followActionCreator = (userId) =>({type: FOLLOW , userId})
export const unfollowActionCreator = (userId) =>({type: UNFOLLOW , userId})
export const setUsersActionCreator = (users) =>({type:SETUSERS, users})
export const setCurrentPageActionCreator = (currentPage) =>({type:SETCURRENTPAGE,currentPage})
export const setTotalUsersCountActionCreator = (totalUsers) =>({type:SETTOTALUSERSCOUNT, totalUsers })
export const setIsFetchingActionCreator = (isFetching) => ({type:ISFETCHING, isFetching})