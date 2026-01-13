import React from "react";
import { Link } from "react-router-dom";
import "./../app.css";

const Home = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to='/about'>Om meg</Link>
                <Link to='/projects'>Mine prosjekter</Link>
            </nav>
            <h1>Hjem</h1>
        </div>
    );
};

export default Home;
