import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';
import Main from './components/Main';
import Home from './pages/Home';
import Show from './pages/Show';
import Nav from './components/Nav';
import './App.css';
import {Routes, Route, Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <header className='header container-fluid text-center'>
          <div className='row'>
            <Header/> 
          </div>
        </header>
        <div className='content container-fluid'> <Main /> </div>
        <footer className='footer container-fluid'> <h1>footer</h1> </footer>
        {/* <h1>Future home of AnimeDB</h1>
        <Outlet/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/:id" element={<Show/>}/>
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
