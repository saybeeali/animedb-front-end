import Header from './components/Header';
import Carousel from './components/Carousel';
import Home from './pages/Home';
import Show from './pages/Show';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LoginButton from './components/LoginButton';
import './Test.css';
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
      <header className='header'><Header/> </header>
      <Routes>

          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/" element={<Intro/>}/>

          <Route exact path="/anime/:id" element={<Show/>}/>

        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;