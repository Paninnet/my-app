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
       ]
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
   
   },

   fiernds : {
     FriendsData : [
       {id:1 ,name: "Ксюша", surname: "Панина", age:23 , img: "#"},
       {id:2 ,name: "Мама", surname: "Панина", age:47 , img: "#"},
       {id:3 ,name: "Папа", surname: "Панин", age:47 , img: "#"},
       {id:4 ,name: "Маша", surname: "Панина", age:10 , img: "#"},
       {id:5 ,name: "Теди", surname: "Панин", age:12 , img: "#"},
     ],

     allFriends(){
       return this.FriendsData.length
     }
   }

}

export default State