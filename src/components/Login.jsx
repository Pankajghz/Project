import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    document.title = "Matchup login";

    const [form, setForm] = useState({});
    const [submitted, setSubitted] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        const passwordInput = document.getElementById('password');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        setForm({});
        setSubitted(true);
    };


    useEffect(() => {
        if (submitted === true) {
            navigate("/otp");
        }
    }, [submitted, navigate])

    return (
        <>
            <div id="profile-body">
                <div className="container">
                    <div className="title">Login</div>
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input type="text" name="username" placeholder="Enter your username" onChange={handleInputChange} value={form.username || ''} maxLength="20" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        id="password"
                                        minLength="6"
                                        maxLength="15"
                                        onChange={handleInputChange}
                                        value={form.password || ''}
                                        required
                                    />
                                </div>
                            </div>
                            <input type="checkbox" onClick={togglePasswordVisibility} />

                            <div className="button">
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
