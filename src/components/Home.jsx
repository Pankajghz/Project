import React from 'react';
import '../styles/Home.css'

import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        document.title = 'Matchup';
    }, [])

    return (
        <>
            <Navbar />
            <div className="img">
                <div className="maincontent">
                    <p>Get your</p>
                    <p>Perfect Match</p>
                </div>
                <Link to="/profile">
                    <button type="button" className="btn btn-danger bg-black">Create Account</button>
                </Link>
            </div>
        </>
    );
};

export default Home;
