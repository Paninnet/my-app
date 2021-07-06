let initialState = {
   FriendsData: [
     { id: 1, name: "Ксюша", surname: "Панина", age: 23, img: "https://sun1-88.userapi.com/s/v1/ig2/rL4xvBzw_hgsIgC4l_0z6xcTvDna_0T_ixiUdEVlWRgHA-3DC3PV6Y9JJfhR1OsiZpGLUf769WJGo4_Rzf6ngghl.jpg?size=200x0&quality=96&crop=46,205,868,868&ava=1" },
     { id: 2, name: "Мама", surname: "Панина", age: 47, img: "https://sun9-38.userapi.com/impg/ewjOZCohEmDi15USKgiICUOE-sUSAJzHHb9C3Q/CtOhqEVSPKM.jpg?size=720x960&quality=96&sign=6aaef1939e08574c70abac44f136535d&type=album" },
     { id: 3, name: "Папа", surname: "Панин", age: 47, img: "https://sun9-15.userapi.com/impg/bh6wyC8hoTwsBBiXDbH1YvEmHxAUZlhKRdEKQw/NyhWgcv8YL4.jpg?size=720x960&quality=96&sign=bb1fa9507ccf0120ade18534497c269d&type=album" },
     { id: 4, name: "Маша", surname: "Панина", age: 10, img: "https://sun9-47.userapi.com/impg/1vfflzlpG5g1txoQRmv0e4jmITj59GchXnZGHg/06hQnA2S_Rk.jpg?size=720x960&quality=96&sign=92d18adb7095479d6bfa53842ec646c7&type=album" },
     { id: 5, name: "Теди", surname: "Панин", age: 12, img: "https://sun9-22.userapi.com/impg/M8tbQvcz1N3pu4Z-Z1bWoUBwfNxM9AhmpTLjUQ/6pvRUxyY46c.jpg?size=720x960&quality=96&sign=42774b39b4e77a01e55b9d02711f2332&type=album" },

   ],

   allFriends() {
     return this.FriendsData.length
   }
 }

const friendsReducer =(state = initialState,action) => {

   return state
}

export default friendsReducer