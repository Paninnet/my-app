const NEWMESSAGE = "NEWMESSAGE"
const UPDATENEWMESSAGETEXT = "UPDATENEWMESSAGETEXT"


let initialState = {
   contactsData: [
     { id: 1, name: "Илья Панин" },
     { id: 2, name: "Ксения Виноградова" },
     { id: 3, name: "Евгений Андрейченко" },
     { id: 4, name: "Мама" },
     { id: 5, name: "Папа" },
     { id: 6, name: "Маша" },
     { id: 7, name: "Теди" },
     { id: 8, name: "Майкл" },
     { id: 9, name: "Стефан" },
     { id: 10, name: "Ибукентий" },
     { id: 11, name: "Вера" },
     { id: 12, name: "Урод" },
     { id: 13, name: "Даша" },
     { id: 14, name: "Наташа" },
     { id: 15, name: "Катя" },
   ],

   messageData: [
     { id: 1, message: "Хей как ты?" },
     { id: 2, message: "НОРМ" },
     { id: 3, message: "А ТЫ" },
     { id: 4, message: "Fuck RUDN" },
     { id: 5, message: "WEED" },
     { id: 6, message: "PEacE" },
   ],

   newMessageText: ""

 }

const dialogsReducer = (state = initialState, action) => {
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