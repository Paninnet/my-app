import * as axios from 'axios'



const instance = axios.create({
   baseURL:'https://social-network.samuraijs.com/api/1.0/',
   withCredentials:true,
   headers :{
      "API-KEY": "dc56557c-d203-4ef2-b475-c27037449547"
   }

})


const usersAPI ={
   getUsers (currentPage =1,pageSize=18){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
   
   .then(response => response.data)
      }
}


export default usersAPI