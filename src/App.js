import Header from './components/Header';
import Carousel from './components/Carousel';
import Home from './pages/Home';
import Show from './pages/Show';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import {Routes, Route, Outlet} from "react-router-dom"

import Intro from './pages/Intro';

import { DataContext } from './data/DataContext';
import {useState} from "react"


function App(props) {
  const [currentUser, setCurrentUser] = useState(null)
 console.log(currentUser)
  return (
    <div className="App">
      <DataContext.Provider value={[currentUser, setCurrentUser]}>
      <div className='wrapper'>
        <header className='header container-fluid text-center'>
          <div className='row'>
            <div className='col-sm'>
              <Header/>
            </div>
            <div className='col-lg'>
              {/*<Nav />*/}
            </div>
          </div>
        </header>
        <Routes>
        <Route exact path="/" element={<Intro/>}/>
        </Routes>
        <div className='carousel container-fluid'>
                <Carousel/> 
            </div>
        <div className='content container-fluid'> 
          
          <div className='animeList container-fluid'>
          <Outlet/>
        <Routes>

          <Route exact path="/home" element={<Home/>}/>
     

          <Route exact path="/anime/:id" element={<Show/>}/>

        </Routes>
        </div>
        </div>
        <footer className='footer container-fluid'> 
          <Footer />
        </footer>
      </div>
      </DataContext.Provider>
    </div>
  );
}

export default App;
