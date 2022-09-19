import {Link} from "react-router-dom"

function AnimeCard(props) {
    return (
      <div className="AnimeCard">
        <Link to={`/${props.anime[0].id}`}>
        <img src={props.anime[0].image}></img>
        </Link>
        <p>{props.anime[0].title}</p>
      </div>
    );
  }
  
  export default AnimeCard;
  