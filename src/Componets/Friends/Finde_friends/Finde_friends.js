import classes from './Finde_friends.module.css'

const Finde_friends = (props) => {
   return (
      <div className={classes.quantityFrineds}>
         <div className={classes.totalFrinds}>
            <p className={classes.friends}>Все Друзья: {props.allfriends.state.allFriends()} </p>
            <p className={classes.friends}>Друзья онлайн:</p>
            <button className={classes.searchButton} type="submit">Найти нового друга </button>
         </div>
         <div className={classes.searchFriends}>
            <input type='text' className={classes.inputArea} placeholder="Поиск друзей"></input>
         </div>
      </div>
   )
}

export default Finde_friends
