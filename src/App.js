import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Show from './pages/Show';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <h1>Future home of AnimeDB</h1>
    </div>
  );
}

export default App;
