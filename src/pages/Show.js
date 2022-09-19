import anime from "../sample_data";
import {useParams, Link} from "react-router-dom"

function Show() {
    const {id} = useParams()

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
  
  export default Show;
  