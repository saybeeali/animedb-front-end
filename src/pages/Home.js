import AnimeCard from "../components/AnimeCard";
import anime from "../sample_data";

function Home(props) {
    return (
      <div className="Home">
        <h1>This will be a list of anime</h1>
        <AnimeCard anime={anime}/>
        <AnimeCard anime={anime}/>
        <AnimeCard anime={anime}/>
        <AnimeCard anime={anime}/>
        <AnimeCard anime={anime}/>
        <AnimeCard anime={anime}/>
        <AnimeCard anime={anime}/>
      </div>
    );
  }
  
  export default Home;
  