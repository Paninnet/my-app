import classes from './MyData.module.css'

const MyData = () => {
   return (
      <div className={classes.MyData_wrapper}>
         <img src='https://sun9-70.userapi.com/impg/c855424/v855424410/214842/870RM7NzcZc.jpg?size=810x1080&quality=96&sign=6109123b1926fe461195e266b728c510&type=album' />
         <p className={classes.MyFIO}>Панин Илья </p>
         <div className={classes.MyInfo}>
            <div>
               <p className={classes.MyDateOFBirth}>Дата рождения:</p>
               <p className={classes.MyCuty}>Город:</p>
            </div>
            <div>
               <p className={classes.MyDateOFBirth}>30.09.1999</p>
               <p className={classes.MyCuty}>Москва</p>
            </div>
         </div>
      </div>
   )
}

export default MyData