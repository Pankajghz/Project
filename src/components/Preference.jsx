import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';

const Preference = () => {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Thik hai");
        setSubmitted(true);
    }


    useEffect(() => {
        if (submitted === true) {
            navigate("/");
        }
    }, [submitted, navigate]);

    return (
        <>
            <div id="profile-body">
                <div className="container">
                    <div className="title">List your crush</div>
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Insta id</span>
                                    <input type="text" placeholder="Enter Insta Id" maxLength="20" required />
                                    <span className="details">Name</span>
                                    <input type="text" placeholder="Enter name" maxLength="25" required />
                                </div>


                                <div className="input-box">
                                    <span className="details">Insta id</span>
                                    <input type="text" placeholder="Enter Insta Id" maxLength="20" required />
                                    <span className="details">Name</span>
                                    <input type="text" placeholder="Enter name" maxLength="25" required />
                                </div>

                                <div className="input-box">
                                    <span className="details">Insta id</span>
                                    <input type="text" placeholder="Enter Insta Id" maxLength="20" required />
                                    <span className="details">Name</span>
                                    <input type="text" placeholder="Enter name" maxLength="25" required />
                                </div>


                                <div className="input-box">
                                    <span className="details">Insta id</span>
                                    <input type="text" placeholder="Enter Insta Id" maxLength="20" required />
                                    <span className="details">Name</span>
                                    <input type="text" placeholder="Enter name" maxLength="25" required />
                                </div>

                            </div>

                            <div className="button"  >
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preference;
