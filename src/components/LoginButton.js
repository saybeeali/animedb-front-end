import {useNavigate} from "react-router-dom"
import '../Test.css';

function LoginButton(props){
    const navigate = useNavigate()
    return(
    <div className="header-btn">
        <button onClick={() => navigate("/")}>Login</button>
        </div>
    )
}

export default LoginButton;