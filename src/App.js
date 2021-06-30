import logo from './logo.svg';
import './App.css';

// import SideBar from './Componets/SideBar/SideBar'
import Header from './Componets/Header/Header';
import SideBar from './Componets/Sidebar/SideBar';
import MyPage from './Componets/MyPage/MyPage';


function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Header />
        <div className='mainContent'>
          <SideBar />
          <div className='mainContentItem'>
            <MyPage />
          </div>

        </div>
      </div>
    </div>
  );
}



export default App;
