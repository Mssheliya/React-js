import React, { useState,useContext } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const {user,setUser} = useContext(UserContext);

    function loginHandler(e){
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <>
            <div>
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username' /> <br />
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password' /> <br /><br />
                <button onClick={loginHandler}>Submit</button>
            </div>
        </>
    )
    
}

export default Login
