import Login from "../components/Login";


function Intro({currentUser, setCurrentUser}){
    return(
        <div className="intro-wrapper">
            <Login  props />
        </div>
    )
}

export default Intro;