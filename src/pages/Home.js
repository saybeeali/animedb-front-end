import AnimeCard from "../components/AnimeCard";
import animeList from "../sample_data";
import {useState, useEffect} from "react"

function Home(props) {

    const [newAnimeList, setNewAnimeList] = useState(null)

    const animeURL = ""
    
    const getAnime = async () => {
        try {
            const response = await fetch(animeURL)
            console.log(response)
            const allAnime = await response.json()
            setNewAnimeList(allAnime)
        } catch (err) {
            console.log(err)
        }
    }

useEffect(() => {getAnime()}, [])


    const loading = () => {
        return (
            <h>loading</h>
        )
    }

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
        {animeList && animeList.length ? loaded() : loading()}
      </div>
    );
}
  
  export default Home;