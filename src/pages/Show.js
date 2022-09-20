import anime from "../sample_data";
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"

function Show() {

    const {id} = useParams()
    const [newAnime, setNewAnime] = useState(null)
    const thisAnimeURL = ""

//once back end is deployed we can fill in the url
//and use this function to fetch it

    const getThisAnime = async () => {
        try {
            const response = await fetch(thisAnimeURL)
            //console.log(response)
            const thisAnime = await response.json()
            setNewAnime(thisAnime)
        } catch (err) {
            //console.log(err)
        }
    }

    useEffect(() => {getThisAnime()}, [])

    const loading = () => {
        return (
            <h1>loading</h1>
        )
    }

    const loaded = () => {
//will have to adjust these keys based on the actual returned object
    return (
      <div className="Show">
        <h1>{anime[id-1].title}</h1>
        <img src={anime[id-1].image}></img>
        <p>medium: {anime[id-1].medium}</p>
        <p>air dates: {anime[id-1].air_dates}</p>
        <a target="_blank" rel="noreferrer" href ={`${anime[id-1].traiiler}`}> Trailer</a>
      </div>
    );
  }
//down here we'll change anime to {either newAnime or thisAnime}
  return (
    <div className = "show">
        {anime ? loaded(): loading()}
    </div>
  );
}

  export default Show;
  