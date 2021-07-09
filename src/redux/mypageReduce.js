const NEWPOST = "NEWPOST"
const UPDATENEWPOSTTEXT = "UPDATENEWPOSTTEXT"

let initialState = {
  postsdata: [
    { id: 1, postText: "Привет, как тsы ?", quantityLikes: 1 },
    { id: 2, postText: "2", quantityLikes: 2 },
    { id: 3, postText: "3", quantityLikes: 3 },
    { id: 4, postText: "4", quantityLikes: 4 },
    { id: 5, postText: "5", quantityLikes: 5 },
    { id: 6, postText: "6", quantityLikes: 6 },
    { id: 7, postText: "7", quantityLikes: 7 },
    { id: 8, postText: "8", quantityLikes: 8 },
  ],

  mydata: [
    { name: "Илья", surname: " Панин", city: "Москва", dateOfBirth: "30.09.1999" }
  ],

  newPostText: ""
}

const mypageReducer = (state = initialState, action) => {
  let stateCopy = {...state , postsdata:[...state.postsdata]
   }
  switch (action.type) {
    
    case NEWPOST:
      let newText = {
        id: 9,
        postText: state.newPostText,
        quantityLikes: action.quantityLikes
      }
      stateCopy.postsdata.unshift(newText)
      stateCopy.newPostText = ""
      return stateCopy
    case UPDATENEWPOSTTEXT:
      stateCopy.newPostText = action.body
      return stateCopy
    default: return stateCopy
  }

}
export let SendPOstActionCreatot = (cuurentValue,quantityLikes) =>{
  return {
     type: NEWPOST,
     cuurentValue : cuurentValue,
     quantityLikes: quantityLikes

  }
}

export let onTextAreaChangeActionCreator = (body) =>{
  return {
     type : UPDATENEWPOSTTEXT,
     body : body
  }
}

export default mypageReducer