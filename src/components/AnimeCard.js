import {Link} from "react-router-dom"

function AnimeCard(props) {
    return (
        <div className="AnimeCard">
            <Link to={`/${props.anime.id}`}>
                <img src={props.anime.image}></img>
            </Link>
            <p>{props.anime.title}</p>
        </div>
    );
}
  
  export default AnimeCard;
  