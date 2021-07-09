import classes from './Finde_my_friends.module.css'

const Finde_my_friends = (props) => {
   return (
         <div>
            <div className={classes.quantityFrineds}>
               <div className={classes.totalFrinds}>
                  <p className={classes.friends}>Все Друзья: {props.allfriends.state.allFriends()} </p>
                  <p className={classes.friends}>Друзья онлайн:</p>
                  
               </div>
               <div className={classes.searchFriends}>
                  <input type='text' className={classes.inputArea} placeholder="Поиск друзей"></input>
               </div>
            </div>
           
         </div>
   )
}

export default Finde_my_friends
