import classes from './Friends.module.css'


const Friends = (props) => {
   return (
      <div className={classes.friends_wrapper}>
         <div className={classes.quantityFrineds}>
            <div className={classes.totalFrinds}>
               <p className={classes.friends}>Все Друзья: {props.state.allFriends()}</p>
               <p className={classes.friends}>Друзья онлайн:</p>
               <button className={classes.searchButton} type="submit">Найти нового друга </button>
            </div>
            <div className={classes.searchFriends}>
               {/* <img className={classes.seacrIcon} src='https://www.pinclipart.com/picdir/big/341-3415321_rounded-magnifying-glass-comments-search-icon-small-png.png'></img> */}
               <input type='text' className ={classes.inputArea} placeholder="Поиск друзей"></input>
            </div>
         </div>
         <div className={classes.friends_item_wrapper}>
            <div className={classes.frineds_item}>

            </div>
         </div>
      </div>
   )
}

export default Friends