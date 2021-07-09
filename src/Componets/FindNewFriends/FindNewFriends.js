import React from 'react'
import classes from './FindNewFriends.module.css'
import FindNewFriendsItem from './FindNewFriendsItem/FindNewFriendsItem'

const FindNewFriends = (props) => {
   console.log(props);
   if(props.data.length === 0){

      // axios.get("https://social-network.samuraijs.com/api/1.0").then

      props.setUsers([
         {id:1, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :true, fullname: "Ефремова Лилия"},
         {id:2, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :true, fullname: "Бердник Лилия" ,},
         {id:3, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :false, fullname: "Наумова Цара" ,},
         {id:4, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :false, fullname: "Максимова Алла" ,},
         {id:5, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :false, fullname: "Ярова Мария" ,},
         {id:6, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :false, fullname: "Кузьмина Береслава" ,},
         {id:7, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :true, fullname: "Беляева Раиса" ,},
         {id:8, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :true, fullname: "Кличко Клавдия" ,},
         {id:9, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :true, fullname: "Борисенко Ульяна" ,},
         {id:10, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :true, fullname: "Журавлёва Прасковья" ,},
         {id:11, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :true, fullname: "Журавлёва Прасковья" ,},
         {id:12, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :true, fullname: "Кузьмина Береслава" ,},
         {id:13, img:"https://i08.fotocdn.net/s124/cd00e4b351c7dbbe/public_pin_l/2823691374.jpg", followed :true, fullname: "Гребневска Таисия" ,},
        
      ])

   }
  
 


   let NewFriends = props.data.map ((item=>{
      return <FindNewFriendsItem id = {item.id} setUsers={props.setUsers}follow={props.follow} unfollow={props.unfollow} followed={item.followed} src ={item.img} fullname={item.fullname}></FindNewFriendsItem>
   })
   )

   
   return (
      <div className={classes.friends_wrapper}>
         <div className={classes.searchFriends}>
            <input type='text' className={classes.inputArea} placeholder="Поиск друзей"></input>
         </div>
         <div className={classes.FindNewFriendsItem_wrapper}>
         {NewFriends}
         </div>
         <div className={classes.showMore}>
            <button className ={classes.showMore_button} >Показать еще</button>
         </div>


      </div>
   )
}

export default FindNewFriends