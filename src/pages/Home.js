import Footer from "../components/Footer";
import { MDBRipple } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

import {useState, useEffect} from "react"


function Home(props) {

    const [newAnimeList, setNewAnimeList] = useState([])

    const animeURL = "https://animedb-back-end.fly.dev/anime"

useEffect(() => {
    fetch(animeURL)
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        setNewAnimeList(json)
        console.log(newAnimeList)
    })
    .catch(console.error)
}, [])
    


    const loading = () => {
        return (
            <h1>loading</h1>
        )
    }

    const loaded = () => {

}


return (

    <div className="Home">
    <div className="text-bottom-border">
        <h1 className="home-text">Anime Library</h1>
    </div>
    <section className="container">
        {newAnimeList.map((anime,id)=>{
            return (
                <Link to= {`/anime/${anime._id}` }>
                    <div className="anime-card">
                    <MDBRipple
        className='bg-image hover-overlay shadow-1-strong rounded'
        rippleTag='div'
        rippleColor='light'
        >

        
                        <img src= {anime.images.jpg.image_url}/>
                        
                        <h4>{anime.title}</h4>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                        </MDBRipple>
                    </div>
                </Link>
        )
    }
)}
    </section>
    <Footer />
        {newAnimeList && newAnimeList.length ? loaded() : loading()}
    </div>

);
}

export default Home;


