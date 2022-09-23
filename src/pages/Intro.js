import Login from "../components/Login";
import {useState, useEffect, useContext} from "react"
import { DataContext} from '../data/DataContext';
import { Carousel } from "react-bootstrap";
import UncontrolledExample from "../components/Carousel";
import Footer from "../components/Footer";

function Intro(){
    
    const [user, setUser] = useContext(DataContext);


    const noUser = () => {
        return (
            <p className="welcome">Welcome</p>
        )
    }

    const yesUser = () => {
        return (
            <div className="loginField">
                <p className="currentUser-display"> Welcome {user}</p>
            </div>
        )
}

    return(
        <div className="intro-wrapper">
            <div className="login-wrapper">
            <Login />
            </div>
            {user ? yesUser() : noUser()}
            <UncontrolledExample/>
            
            <div className="intro-text">
            <p className="p-text">
            <img className="watch-icon" src="https://i.imgur.com/fs7axax.png"></img>
            Search Your Favorite Anime 
            </p>
            <p className="p-text2">
                <img className="watch-icon" src="https://i.imgur.com/6YxJjL3.png"></img>
            Leave A Review For The AnimeDB community
            </p>
            </div>
        </div>
    )
}

export default Intro;