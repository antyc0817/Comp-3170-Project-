import React, { useState } from "react";
import "../styles/SignUp.css";
import logo from "../assets/image1.png";

function SignUp({ onSignUp, onSwitchToLogin }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!firstName || !lastName || !email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "{}");

        if (users[email]) {
            setError("An account with this email already exists.");
            return;
        }

        const newUser = {
            firstName,
            lastName,
            email,
            password
        };

        users[email] = newUser;
        localStorage.setItem("users", JSON.stringify(users));

        setSuccess("Account created successfully!");
        onSignUp(newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className='signup-page'>
            <div className='signup-box'>
                <img
                    src={logo}
                    alt='Logo'
                    className='signup-logo'
                />
                <h2>Sign Up</h2>
                {error && <div className='error-message'>{error}</div>}
                {success && <div className='success-message'>{success}</div>}
                <form onSubmit={handleSignUp}>
                    <input
                        type='text'
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
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
                    <button type='submit'>Sign Up</button>
                </form>
                <p>
                    Already have an account?{" "}
                    <button className='link-button' onClick={onSwitchToLogin}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
