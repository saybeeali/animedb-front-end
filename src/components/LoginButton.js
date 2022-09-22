import {useNavigate} from "react-router-dom"
import '../Test.css';

function LoginButton(props){
    const navigate = useNavigate()
    return(
    <div className="header-btn">
        <button className="login-page-btn" onClick={() => navigate("/")}>Login Page</button>
        </div>
    )
}

export default LoginButton;