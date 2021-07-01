import logo from './logo.svg';
import './App.css';


import Header from './Componets/Header/Header';
import SideBar from './Componets/Sidebar/SideBar';
import MyPage from './Componets/MyPage/MyPage';
import Dialogs from './Componets/Dialogs/Dialogs';
import { BrowserRouter,Route } from 'react-router-dom'
import Friends from './Componets/Friends/Friends';
import Musics from './Componets/Musics/Musics';

// const postsdata = [
//   {id:1, postText:"Привет, как тsы ?",quantityLikes:1 },
//   {id:2, postText:"2",quantityLikes:2 },
//   {id:3, postText:"3",quantityLikes:3 },
//   {id:4, postText:"4",quantityLikes:4 },
//   {id:5, postText:"5",quantityLikes:5 },
//   {id:6, postText:"6",quantityLikes:6 },
//   {id:7, postText:"7",quantityLikes:7 },
// ] 

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <div className='mainContent'>
            <SideBar />
            <div className='mainContentItem'>
              <Route path ='/mypage'  component = {MyPage}/>
              <Route path ='/dialogs' component = {Dialogs}/>
              <Route path ='/friends' component = {Friends}/>
              <Route path ='/musics' component = {Musics}/>
            </div>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
