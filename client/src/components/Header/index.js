import '../../default.scss';
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
        <header className='p-8 bg-gray-400'>
            <Link to="/" className='pr-4'>Home</Link>
            {/* <Link to="/registration" className='pr-4'>Register</Link> */}

            {user ? (
                <button onClick={handleSignOut} className='pr-4'>Logout</button> 
            ) : ( 
                <Link to="/login" className='pr-4'>Login</Link>
            )}
        </header>
     );
}

export default Header;