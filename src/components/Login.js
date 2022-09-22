import { useState, useEffect, useContext } from "react"
import { DataContext} from '../data/DataContext';

function Login(props) {


    const [login, setLogin] = useState({ username: "", password: "" });
    

    
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setCurrentUser(login.username)
        setLogin({username: "", password: ""})
    }


    return (
        <div className="login-form">
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
            <button type="submit" value="Login">Login</button>
        </form>
        </div>
    );

}

export default Login