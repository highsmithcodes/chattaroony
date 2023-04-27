import './style.scss';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <header>
            <Link to="/">Home</Link>
            <Link to="/registration">Register</Link>
            <Link to="/login">Login</Link>
        </header>
     );
}

export default Header;