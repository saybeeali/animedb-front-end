import {Link} from "react-router-dom"
import { MDBRipple } from 'mdb-react-ui-kit';

function AnimeCard(props) {
    return (
        
        <div className="AnimeCard">
            <MDBRipple
        className='bg-image hover-overlay shadow-1-strong rounded'
        rippleTag='div'
        rippleColor='light'
        >
            <Link to={`/${props.anime.id}`}>
                <img src={props.anime.image}></img>
            </Link>
            <Link to={`/${props.anime.id}`}>
            <p className="anime-title">{props.anime.title}</p>
            </Link>
            <a href={props.anime.id}>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
        </a>
        </MDBRipple>
        </div>
        
    );
}

export default AnimeCard;
