import { UserAuth } from "../context/AuthContext";

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
        <div>
            <p>Welcome, {user?.displayName}</p>
            <button onClick={handleSignOut}>Signout</button>
        </div>
    );
}

export default Account;