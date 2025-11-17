import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../assets/image1.png";

function Login({ onLogin, onSwitchToSignUp }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "{}");
        const user = users[email];

        if (!user || user.password !== password) {
            setError("Invalid email or password.");
            return;
        }

        onLogin(user);
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
                {error && <div className='error-message'>{error}</div>}
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
                <p>
                    Don't have an account?{" "}
                    <button className='link-button' onClick={onSwitchToSignUp}>
                        Sign Up
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;
