import { useState, useEffect, useContext } from "react"
import { DataContext} from '../data/DataContext';
import {useNavigate} from "react-router-dom"

function Login() {

    const navigate = useNavigate()
    const dataContext = useContext(DataContext);
    const [login, setLogin] = useState({ username: "", password: "" });
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dataContext[1](login.username)
        console.log(dataContext)
        setLogin({username: "", password: ""})
    }

    return (
        <div className="login-form">
            <p>{dataContext.currentUser}</p>
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={login.username}
                name="username"
                placeholder="username"
                onChange={handleChange}
                />
            <input type="password"
                value={login.password}
                name="password"
                placeholder="password"
                onChange={handleChange}
                />
            <button type="submit" onClick={() => navigate("/home")} value="Login">Login</button>
        </form>
        </div>
    );

}

export default Login