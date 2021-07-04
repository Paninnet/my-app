import { rerenderEntireTree } from "../render"
const State ={ 

   mypage :{
      postsdata : [
         {id:1, postText:"Привет, как тsы ?",quantityLikes:1 },
         {id:2, postText:"2",quantityLikes:2 },
         {id:3, postText:"3",quantityLikes:3 },
         {id:4, postText:"4",quantityLikes:4 },
         {id:5, postText:"5",quantityLikes:5 },
         {id:6, postText:"6",quantityLikes:6 },
         {id:7, postText:"7",quantityLikes:7 },
         {id:8, postText:"8",quantityLikes:8 },
       ],

       mydata : [
         {name: "Илья", surname :" Панин", city: "Москва", dateOfBirth : "30.09.1999"}
       ], 

       newPostText :""
   },
  
   dialogs :{
      contactsData: [
         {id: 1, name:"Илья Панин"},
         {id: 2, name:"Ксения Виноградова"},
         {id: 3, name:"Евгений Андрейченко"},
         {id: 4, name:"Мама"},
         {id: 5, name:"Папа"},
         {id: 6, name:"Маша"},
         {id: 7, name:"Теди"},
         {id: 8, name:"Майкл"},
         {id: 9, name:"Стефан"},
         {id: 10, name:"Ибукентий"},
         {id: 11, name:"Вера"},
         {id: 12, name:"Урод"},
         {id: 13, name:"Даша"},
         {id: 14, name:"Наташа"},
         {id: 15, name:"Катя"},
       ],
   
       messageData : [
         {id: 1, message: "Хей как ты?"},
         {id: 2, message:"НОРМ"},
         {id: 3, message:"А ТЫ"},
         {id: 4, message:"Fuck RUDN"},
         {id: 5, message:"WEED"},
         {id: 6, message:"PEacE"},
       ],
       
       newMessageText:""
   
   },

   fiernds : {
     FriendsData : [
       {id:1 ,name: "Ксюша", surname: "Панина", age:23 , img: "https://sun1-88.userapi.com/s/v1/ig2/rL4xvBzw_hgsIgC4l_0z6xcTvDna_0T_ixiUdEVlWRgHA-3DC3PV6Y9JJfhR1OsiZpGLUf769WJGo4_Rzf6ngghl.jpg?size=200x0&quality=96&crop=46,205,868,868&ava=1"},
       {id:2 ,name: "Мама", surname: "Панина", age:47 , img: "https://sun9-38.userapi.com/impg/ewjOZCohEmDi15USKgiICUOE-sUSAJzHHb9C3Q/CtOhqEVSPKM.jpg?size=720x960&quality=96&sign=6aaef1939e08574c70abac44f136535d&type=album"},
       {id:3 ,name: "Папа", surname: "Панин", age:47 , img: "https://sun9-15.userapi.com/impg/bh6wyC8hoTwsBBiXDbH1YvEmHxAUZlhKRdEKQw/NyhWgcv8YL4.jpg?size=720x960&quality=96&sign=bb1fa9507ccf0120ade18534497c269d&type=album"},
       {id:4 ,name: "Маша", surname: "Панина", age:10 , img: "https://sun9-47.userapi.com/impg/1vfflzlpG5g1txoQRmv0e4jmITj59GchXnZGHg/06hQnA2S_Rk.jpg?size=720x960&quality=96&sign=92d18adb7095479d6bfa53842ec646c7&type=album"},
       {id:5 ,name: "Теди", surname: "Панин", age:12 , img: "https://sun9-22.userapi.com/impg/M8tbQvcz1N3pu4Z-Z1bWoUBwfNxM9AhmpTLjUQ/6pvRUxyY46c.jpg?size=720x960&quality=96&sign=42774b39b4e77a01e55b9d02711f2332&type=album"},
       
     ],

     allFriends(){
       return this.FriendsData.length
     }
   }

}
window.state=State

export let newPost = (message,quantityLikes) =>{

    let newText ={
        id:9,
        postText:message,
        quantityLikes:quantityLikes
    }
    State.mypage.postsdata.unshift(newText)
    State.mypage.newPostText=""
    rerenderEntireTree(State)
}

export let updateNewPostText = (body) =>{
    State.mypage.newPostText=body
    rerenderEntireTree(State)
}

export let newMesage = (message) =>{
  let newText = {
    id:7,
    message:message
  }
  State.dialogs.messageData.unshift(newText)
  State.dialogs.newMessageText=""
  rerenderEntireTree(State)
}

export let updateNewMessageText = (body) => {
  State.dialogs.newMessageText = body
  rerenderEntireTree(State)
}


 
export default State