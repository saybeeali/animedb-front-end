import Header from './components/Header';
import Carousel from './components/Carousel';
import Home from './pages/Home';
import Show from './pages/Show';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import {Routes, Route, Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <header className='header container-fluid text-center'>
          <div className='row'>
            <div className='col-sm'>
              <Header/>
            </div>
            <div className='col-lg'>
              <Nav />
            </div>
          </div>
          
        </header>
        <div className='carousel container-fluid'>
          <Carousel/> 
          </div>
        <div className='content container-fluid'> 
          
          <div className='animeList container-fluid'>
          <Outlet/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/:id" element={<Show/>}/>
        </Routes>
        </div>
        </div>
        <footer className='footer container-fluid'> 
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
