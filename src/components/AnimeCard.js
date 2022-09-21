import {Link} from "react-router-dom"
import { MDBRipple } from 'mdb-react-ui-kit';

function AnimeCard(props) {
    return (
        
        <div className="AnimeCard">
            <MDBRipple
        className='bg-image hover-overlay'
        rippleTag='div'
        rippleColor='light'
        >
            <div className='mask'></div>
            <Link to={`/${props.anime.id}`}>
                <img src={props.anime.image}></img>
            </Link>
            </MDBRipple>
            <Link to={`/${props.anime.id}`}>
            <p className="anime-title">{props.anime.title}</p>
            </Link>
        
        
        
        </div>
        
    );
}

export default AnimeCard;
