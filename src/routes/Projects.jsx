import React from "react";
import { Link } from "react-router-dom";
import "./../app.css";

export default function Projects() {
    return (
        <div>
            <nav className='navbar'>
                <Link to='/'>Hjem</Link>
                <Link to='/about'>Om meg</Link>
            </nav>
            <h1>Prosjekt siden</h1>
        </div>
    );
}
