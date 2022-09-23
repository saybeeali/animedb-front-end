// import Carousel from "./Carousel";
import Nav from "./Nav";
import LoginButton from "./LoginButton";

function Header() {
return (
        <div className="Header">
                <a href="/" alt="home"><h1 className="logo">AnimeDB</h1></a>
                <LoginButton />
                
        </div>
);
}

export default Header;
