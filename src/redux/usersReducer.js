const FOLLOW ="FOLLOW"
const UNFOLLOW ="UNFOLLOW"
const SETUSERS = "SETUSERS"

let initialState = {
   users: [],
   
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
      case SETUSERS: {
         return {...state,users:[...state.users, ...action.users]}
      }
      default:
         return {...state};
   }

}
export default usersReducer

export const followActionCreator = (userId) =>({type: FOLLOW , userId})
export const unfollowActionCreator = (userId) =>({type: UNFOLLOW , userId})
export const setUsersActionCreator = (users) =>({type:SETUSERS, users})