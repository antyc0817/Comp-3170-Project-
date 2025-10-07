import React, { useState } from "react";
import "../styles/SignUp.css";
import logo from "../assets/image1.png";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        alert(`Signed up as ${firstName} ${lastName} (${email})`);
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
            </div>
        </div>
    );
}

export default SignUp;
