import { NavLink } from "react-router-dom";
import '../styles/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink exact to="/" activeClassName="active-page">Home</NavLink></li>
                <li><NavLink to="/sample" activeClassName="active-page">The Game</NavLink></li>
                <li><NavLink to="/rules" activeClassName="active-page">The Rules</NavLink></li>
                <li><NavLink to="/scores" activeClassName="active-page">The Scores</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
