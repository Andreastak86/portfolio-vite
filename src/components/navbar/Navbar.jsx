import "./navbar.css";

export default function Navbar() {
    return (
        <div id='nav-bar'>
            <p>Portfolio Andreas Takvam</p>
            <ul className='nav-items'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}
