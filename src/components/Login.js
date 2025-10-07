import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../assets/image1.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        alert(`Logged in with Email: ${email}, Remember Me: ${rememberMe}`);
        setEmail("");
        setPassword("");
        setRememberMe(false);
    };

    return (
        <div className='login-page'>
            <div className='login-box'>
                <h2>Login</h2>
                <img
                    src={logo}
                    alt='Logo'
                    className='login-logo'
                />
                <form onSubmit={handleLogin}>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className='checkbox-container'>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor='rememberMe'>Remember Me</label>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
