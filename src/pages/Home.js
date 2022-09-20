import AnimeCard from "../components/AnimeCard";

import animeList from "../sample_data";
import {useState, useEffect} from "react"


function Home(props) {

    const [newAnimeList, setNewAnimeList] = useState(null)

    const animeURL = ""
    //once we have the backend deployed we'll fill in the url here 
    //and use it to fetch the data from the backend
    const getAnime = async () => {
        try {
            const response = await fetch(animeURL)
            //console.log(response)
            const allAnime = await response.json()
            setNewAnimeList(allAnime)
        } catch (err) {
            //console.log(err)
        }
    }

useEffect(() => {getAnime()}, [])


    const loading = () => {
        return (
            <h1>loading</h1>
        )
    }

    const loaded = (props) => {
        return animeList.map((anime, idx) => {
            return (
                <div className="animeIndex">
                    <AnimeCard anime={anime}/>
                </div>
        )
    })
}

 
//down here change animeList to newAnimeList or allAnime
    return (
      <div className="Home">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {animeList && animeList.length ? loaded() : loading()}
      </div>
      </div>
    );
}
  
  export default Home;

  