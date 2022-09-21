import AnimeCard from "../components/AnimeCard";
import { Link } from "react-router-dom";

import {useState, useEffect} from "react"


function Home(props) {

    const [newAnimeList, setNewAnimeList] = useState([])

    const animeURL = "https://animedb-back-end.herokuapp.com/anime"
  

useEffect(() => {
    fetch(animeURL)
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        setNewAnimeList(json)
    })
    .catch(console.error)
}, [])
    


    const loading = () => {
        return (
            <h1>loading</h1>
        )
    }

    const loaded = (props) => {
    //     return newAnimeList.map((anime, idx) => {
    //         return 
    // })
}

 
//down here change animeList to newAnimeList or allAnime
    return (
      <div className="Home">
      {/* <div className="row row-cols-1 row-cols-md-4 g-4"> */}
        <section className="container">
            {newAnimeList.map((anime,id)=>{
                // anime._id=id
                return (
                    <Link to= {`/anime/${anime._id}` }>
                    <div className="anime-card">
                        <h4>{anime.title}</h4>
                        
                    <img src= {anime.images.jpg.image_url}/>
                    </div>
                    </Link>
                )
            }
            )}
        </section>
   
        {newAnimeList && newAnimeList.length ? loaded() : loading()}
      </div>
    //   </div>
    );
}
  
  export default Home;
    //once we have the backend deployed we'll fill in the url here 
    //and use it to fetch the data from the backend
    // const getAnime = async () => {
    //     try {
    //         const response = await fetch(animeURL)
    //         //console.log(response)
    //         const allAnime = await response.json()
    //         setNewAnimeList(allAnime)
    //     } catch (err) {
    //         //console.log(err)
    //     }
    // }

  