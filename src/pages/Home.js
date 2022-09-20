import AnimeCard from "../components/AnimeCard";
import anime from "../sample_data";

function Home(props) {
    return (
      <div className="Home">
        <h2>This will be a list of anime</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="card">
          <AnimeCard anime={anime}/>
        </div>
        <div className="card">
          <AnimeCard anime={anime}/>
        </div>
        <div className="card">
          <AnimeCard anime={anime}/>
        </div>
        <div className="card">
          <AnimeCard anime={anime}/>
        </div>
        <div className="card">
          <AnimeCard anime={anime}/>
        </div>
        <div className="card">
          <AnimeCard anime={anime}/>
        </div>
        <div className="card">
          <AnimeCard anime={anime}/>
        </div>
        <div className="card">
          <AnimeCard anime={anime}/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  