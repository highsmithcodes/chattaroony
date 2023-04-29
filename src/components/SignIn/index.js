import Button from '../../components/forms/Button/index'
import {GoogleButton} from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SignIn = () => {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async() => {
        try {
            await googleSignIn();
            
        } catch(err) {
            console.log(err)
        }
    }


    useEffect(() => {
        if(user != null){
            navigate('/account');
        }
    }, [user])

    return ( 
        <div>
            <h1>Sign In Component</h1>
            <GoogleButton onClick={handleGoogleSignIn} />
        </div>
     );
}

export default SignIn;