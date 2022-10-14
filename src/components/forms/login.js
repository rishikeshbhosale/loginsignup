import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import '../../App.css'
import './login.css'


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));

    const loginApi = () => {

        axios.post('http://127.0.0.1:8000/api/v1/people/login', {
            username: email,
            password: pass
        })
            .then(function (response) {
                if (response.status === 200) {
                    setauthenticated(true)
                    localStorage.setItem("authenticated", true);
                    localStorage.setItem("token", response.token)
                    navigate("/user");
                }
                if (response.status === 500) {
                    alert("worng username or password")
                }
            })
            .catch(function (error) {
                alert("Server Busy!!! Plaease Try Again");

            });

    }

    return (
        <>
            <h1>Welcome! </h1>
            <h2>Please login to continue.</h2>
            <div className='form-container'>
                <div className='form'>
                    <p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email" required />
                    </p>
                    <p>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" placeholder="password" required />
                    </p>
                    <div className='button-container'>
                        <div className='buttons'>
                            <button onClick={loginApi} className="btn-login" type="submit" id="login" value="Login" > Login </button>

                            <Link to="/signup">
                                <button className="btn-signup" type="submit" id="signup" value="signup" >Signup </button>
                            </Link>


                            <h1>     {email}</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login