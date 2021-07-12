import classes from './MyData.module.css'

const MyData = (props) => {
   if (!props.profile) {
      return (
         <div className={classes.MyData_wrapper}>
            <img src='https://sun9-70.userapi.com/impg/c855424/v855424410/214842/870RM7NzcZc.jpg?size=810x1080&quality=96&sign=6109123b1926fe461195e266b728c510&type=album' />
            <p className={classes.MyFIO}>{props.name} {props.surname} </p>
            <div className={classes.MyInfo}>
               <div>
                  <p className={classes.MyDateOFBirth}>Дата рождения:</p>
                  <p className={classes.MyCuty}>Город:</p>
               </div>
               <div>
                  <p className={classes.MyDateOFBirth}>{props.dateOfBirth}</p>
                  <p className={classes.MyCuty}>{props.city}</p>
               </div>
            </div>
         </div>
      )
   } else {
      return (
         <div className={classes.MyData_wrapper}>
            <img src={props.profile.photos.large} />
            <p className={classes.MyFIO}>{props.profile.fullName} </p>
            <div className={classes.MyInfo}>
               <div>
                  <p className={classes.MyDateOFBirth}>Ищю работу:</p>
                  <p className={classes.MyCuty}>Обо мне:</p>
                  <p></p>
               </div>
               <div>
                  <p className={classes.MyDateOFBirth}>{props.profile.lookingForAJob ? 'да' : 'нет'}</p>
                  <p className={classes.MyCuty}>{props.profile.aboutMe}</p>
               </div>
            </div>
         </div>
      )
   }
}

export default MyData