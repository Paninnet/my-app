const NEWPOST = "NEWPOST"
const UPDATENEWPOSTTEXT = "UPDATENEWPOSTTEXT"

const mypageReducer = (state, action) => {
  switch (action.type) {
    case NEWPOST:
      let newText = {
        id: 9,
        postText: action.message,
        quantityLikes: action.quantityLikes
      }
      state.postsdata.unshift(newText)
      state.newPostText = ""
      return state
    case UPDATENEWPOSTTEXT:
      state.newPostText = action.body
      return state
    default:
      return state
  }

}
export let SendPOstActionCreatot = (cuurentValue,quantityLikes) =>{
  return {
     type: NEWPOST,
     message : cuurentValue,
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