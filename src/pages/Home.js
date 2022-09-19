import AnimeCard from "../components/AnimeCard";
import animeList from "../sample_data";

function Home(props) {

    
    const loaded = (props) => {
        return animeList.map((anime) => {
            return (
                <div className="animeIndex">
                    <AnimeCard anime={anime}/>
                </div>
        )
    })
}

    return (
      <div className="Home">
        {animeList && animeList.length ? loaded() : loaded()}
      </div>
    );
}
  
  export default Home;