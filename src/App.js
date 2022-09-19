import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';
import Home from './pages/Home';
import Show from './pages/Show';
import Nav from './components/Nav';
import './App.css';
import {Routes, Route, Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <header className='header'> <Header/> </header>
        <aside className='sidebar'> <Sidebar/> </aside>
        <div className='content'> <h1>Content</h1> </div>
        <footer className='footer'> <h1>footer</h1> </footer>
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
