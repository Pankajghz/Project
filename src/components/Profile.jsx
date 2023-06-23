import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    document.title = 'Matchup create account';

    const [form, setForm] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const validatePassword = () => {
        if (form.password !== form.passwordConf) {
            setPasswordError("Passwords don't match");
            return false;
        }
        setPasswordError('');
        return true;
    };

    const togglePasswordVisibility = () => {
        const password = document.getElementById('password');
        const passwordConf = document.getElementById('confirm_password');
        password.type = password.type === 'password' ? 'text' : 'password';
        passwordConf.type = passwordConf.type === 'password' ? 'text' : 'password';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isPasswordValid = validatePassword();

        if (isPasswordValid) {
            console.log(form);
            setForm({});
            setSubmitted(true);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (submitted === true) {
            navigate("/otp");
        }
    }, [submitted, navigate]);

    return (
        <>
            <div id="profile-body">
                <div className="container">
                    <div className="title">Signup</div>
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        maxLength="25"
                                        onChange={handleInputChange}
                                        value={form.name || ''}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter your username"
                                        maxLength="25"
                                        onChange={handleInputChange}
                                        value={form.username || ''}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        onChange={handleInputChange}
                                        value={form.email || ''}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="Enter your number"
                                        min="1000000000"
                                        max="9999999999"
                                        onChange={handleInputChange}
                                        value={form.phone || ''}
                                        required
                                    />
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
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input
                                        type="password"
                                        name="passwordConf"
                                        placeholder="Confirm your password"
                                        id="confirm_password"
                                        minLength="6"
                                        maxLength="15"
                                        onChange={handleInputChange}
                                        value={form.passwordConf || ''}
                                        required
                                    />
                                    {passwordError && <div className="error">{passwordError}</div>}
                                </div>
                            </div>
                            <input type="checkbox" onClick={togglePasswordVisibility} />
                            <div className="gender-details">
                                <input type="radio" name="gender" onChange={handleInputChange} value={"Male"} id="dot-1" />
                                <input type="radio" name="gender" onChange={handleInputChange} value={"Female"} id="dot-2" />
                                <input type="radio" name="gender" onChange={handleInputChange} value={"Prefer not to say"} id="dot-3" />
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label htmlFor="dot-1">
                                        <span className="dot one"></span>
                                        <span className="gender">Male</span>
                                    </label>
                                    <label htmlFor="dot-2">
                                        <span className="dot two"></span>
                                        <span className="gender">Female</span>
                                    </label>
                                    <label htmlFor="dot-3">
                                        <span className="dot three"></span>
                                        <span className="gender">Prefer not to say</span>
                                    </label>
                                </div>
                            </div>

                            <div className="button">
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
