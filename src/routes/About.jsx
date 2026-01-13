import React from "react";
import { Link } from "react-router-dom";
import "./../app.css";

const About = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Mine prosjekter</Link>
            </nav>
            <h1>Om meg siden</h1>
        </div>
    );
};

export default About;
