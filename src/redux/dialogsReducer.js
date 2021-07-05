const NEWMESSAGE = "NEWMESSAGE"
const UPDATENEWMESSAGETEXT = "UPDATENEWMESSAGETEXT"

const dialogsReducer = (state, action) => {
   switch (action.type) {
      case NEWMESSAGE:
         let newText = {
            id: 7,
            message: action.message
         }
         state.messageData.unshift(newText)
         state.newMessageText = ""
         return state
      case UPDATENEWMESSAGETEXT:
         state.newMessageText = action.body
         return state
      default: return state
   }

}

export let newMessageActionCreator = (message) =>{
   return {
      type:NEWMESSAGE,
      message :message
 
   }
 }
 
 export let updateNewMessageTextActionCreator = (body) =>{
   return {
      type: UPDATENEWMESSAGETEXT,
      body:body
   }
 }
export default dialogsReducer