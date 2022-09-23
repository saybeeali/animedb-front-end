import {Link} from "react-router-dom"
import { MDBRipple } from 'mdb-react-ui-kit';
import {useState, useEffect} from "react"
//import anime from "../sample_data";

function AnimeCard(props) {
    // const [newAnimeList, setNewAnimeList] = useState([])

    // const animeURL = "https://animedb-back-end.herokuapp.com/anime"
  

// useEffect(() => {
//     fetch(animeURL)
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json)
//         setNewAnimeList(json)
//     })
//     .catch(console.error)
// }, [])



    return (
        
        <div className="AnimeCard">
            <MDBRipple
        className='bg-image hover-overlay'
        rippleTag='div'

        rippleColor='light'
        >

        </MDBRipple>
        </div>
        
    );
}

export default AnimeCard;

{/* <div className='mask'></div>
<Link to={`/${props.anime.id}`}>
    <img src={props.anime.image}></img>
</Link>

<Link to={`/${props.anime.id}`}>
<p className="anime-title">{props.anime.title}</p>
</Link>
<a href={props.anime.id}>
<div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
</a> */}
