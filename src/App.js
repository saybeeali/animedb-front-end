import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Show from './pages/Show';
import './App.css';
import {Routes, Route, Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <h1>Future home of AnimeDB</h1>
      <Outlet/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/:id" element={<Show/>}/>
      </Routes>
    </div>
  );
}

export default App;
