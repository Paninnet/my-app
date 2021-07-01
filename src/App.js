import logo from './logo.svg';
import './App.css';


import Header from './Componets/Header/Header';
import SideBar from './Componets/Sidebar/SideBar';
import MyPage from './Componets/MyPage/MyPage';
import Dialogs from './Componets/Dialogs/Dialogs';
import { BrowserRouter,Route } from 'react-router-dom'
import Friends from './Componets/Friends/Friends';
import Musics from './Componets/Musics/Musics';


function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <div className='mainContent'>
            <SideBar />
            <div className='mainContentItem'>
              <Route path ='/mypage' component = {MyPage}/>
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
