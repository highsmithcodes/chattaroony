import { UserAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';

function Account() {
    const {logOut, user} = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch(err) {
            console.log(err)
        }
    }

    return (  
        <div className="container mx-auto p-5">
            <p>Welcome, {user?.displayName}</p>
            <button onClick={handleSignOut}>Signout</button>
            <Link to="/" className='pr-4 block mt-5'><button className="bg-gray-400 p-4 rounded-xl">Go to GraphQL MongoDB Front-End</button></Link>

        </div>
    );
}

export default Account;