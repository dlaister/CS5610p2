import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rules">Rules</Link></li>
                <li><Link to="/sample">Sample</Link></li>
                <li><Link to="/scores">Scores</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
