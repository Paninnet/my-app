import logo from './logo.svg';
import './App.css';


import Header from './Componets/Header/Header';
import SideBar from './Componets/Sidebar/SideBar';
import MyPageContainer from './Componets/MyPage/MyPageContainer'
import { BrowserRouter,Route } from 'react-router-dom'
import Friends from './Componets/Friends/Friends';
import Musics from './Componets/Musics/Musics';
import DialogsContainer from './Componets/Dialogs/DialogsContainer';
import FindNewFriendContainer from './Componets/FindNewFriends/FindNewFriendsContainer'




function App(props) {



  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <div className='mainContent'>
            <SideBar />
            <div className='mainContentItem'>
              <Route path ='/mypage'  render ={() =><MyPageContainer/> } />
              <Route path ='/dialogs' render ={() =>  <DialogsContainer/>} />
              <Route path ='/friends' render ={() =><Friends state ={props.State.fiernds}/> } />
              <Route path = '/newfriends' render ={() => <FindNewFriendContainer/>}/>
              <Route path ='/musics' render ={() => <Musics/>} />
              
              
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
