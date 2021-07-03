import Finde_friends from './Finde_friends/Finde_friends'

import classes from './Friends.module.css'
import Frineds_list from './Friends_list/Friends_list'



const Friends = (props) => {

   
   const friendItem =props.state.FriendsData.map ((item => {
      return <Frineds_list img = {item.img} name = {item.name} surname = {item.surname}></Frineds_list>
   })
   )
   return (
      <div className={classes.friends_wrapper}>
         
            <Finde_friends allfriends ={props}/>
            {friendItem}
      </div>
   )
}

export default Friends