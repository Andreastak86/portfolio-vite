import React from "react";
import { Link } from "react-router-dom";
import "../app.css";
import me from "../assets/male.png";

const Home = () => {
    return (
        <div className='container'>
            <nav className='navbar'>
                <Link to='/about'>Om meg</Link>
                <Link to='/projects'>Mine prosjekter</Link>
            </nav>
            <div>
                <h1>Velkommen til min portfolio</h1>
                <p>Mitt navn er Andreas Takvam</p>
                <h3>Jeg er en fullstack utvikler</h3>
                <img className='profileimg' src={me} alt='me' />
            </div>
            <div>
                <p>
                    Så kjekt at du besøker min nettside, jeg jobber i dag som
                    fullstack-utvikler med kjærlig interesse for React
                </p>
                <p>
                    Ønsker du å komme i kontakt med meg så kan du sende meg en
                    melding på Discord!
                </p>
            </div>
        </div>
    );
};

export default Home;
