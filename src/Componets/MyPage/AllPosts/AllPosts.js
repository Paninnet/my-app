import classes from './AllPosts.module.css'

const AllPosts =(props) => {
   return(
      <div className ={classes.itemPosts_wrapper}>
         <div className = {classes.who_post}>
            <img className={classes.litle_foto} src='https://sun9-70.userapi.com/impg/c855424/v855424410/214842/870RM7NzcZc.jpg?size=810x1080&quality=96&sign=6109123b1926fe461195e266b728c510&type=album' />
            <p className={classes.MyFIO}>Панин Илья </p>
         </div>
         
         <div className = {classes.post_body}>
            <p className ={classes.post}>{props.message}</p>
         </div>

         <div className = {classes.lIkes_delete_post}>
            <button className = {classes.delete}>Удалить</button>
            <button className = {classes.like}>Лакнуть:{props.quantityLikes}</button>
         </div>
         
      </div>
   )
}

export default AllPosts