import './style.scss';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

function Header() {

    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch(err) {
            console.log(err)
        }
    }

    return ( 
        <header>
            <Link to="/">Home</Link>
            <Link to="/registration">Register</Link>

            {user ? (
                <button onClick={handleSignOut}>Logout</button> 
            ) : ( 
                <Link to="/login">Login</Link>
            )}
        </header>
     );
}

export default Header;