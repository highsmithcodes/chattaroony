import Button from '../forms/Button/index'
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
        <div className="container mx-auto p-5">
            <div className='text-xl pb-4'>Sign In First to See the Project</div>
            <GoogleButton onClick={handleGoogleSignIn} />
        </div>
     );
}

export default SignIn;