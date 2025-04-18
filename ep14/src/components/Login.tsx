import React, { useRef, useState, } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { buildErrorMessage } from 'vite';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {

        console.log(email.current.value);
        console.log(password.current.value);
        // console.log(name.current.value);

        // validate the form data

        const message = checkValidData(email.current.value, password.current.value, isSignInForm ? null : name.current.value);
        console.log(message);
        setErrorMessage(message);

        if (message) return;

        // Sign in/Sign up

        if (!isSignInForm) {
            //sign up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4"
                    })

                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;

                            console.log(auth);
                            console.log(photoURL);
                            console.log(email);

                            dispatch(
                                addUser({ 
                                    uid: uid, 
                                    email: email, 
                                    displayName: displayName,
                                    photoURL: photoURL })
                                
                                );
                            
                        
                            // Profile updated!
                            // ...
                            navigate('/browse');
                })

                .catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                });



            // ...
        })
                .catch ((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage + ' - ' + errorCode);
    // ..
});

        }

        else {
    // sign in logic

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate('/browse');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage + ' - ' + errorCode);
        });
}

    }

return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix-bg" />
        </div>

        <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 absolute p-12 bg-black/90 my-36 mx-auto right-0 left-0 text-white rounded-lg'>

            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
            </h1>

            {isSignInForm ?
                <></>
                : <input ref={name}
                    type="text"
                    placeholder='Full Name'
                    className='p-4 my-2 w-full border-1 bg-gray-700 rounded-lg' />}

            <input type="text"
                ref={email}
                placeholder='Email Address'
                className='p-4 my-2 w-full border-1 bg-gray-700 rounded-lg' />

            <input type="password"
                ref={password}
                placeholder='Password'
                className='p-4 my-2 w-full border-1 bg-gray-700 rounded-lg' />

            <p className='text-red-500 font-bold text-lg py-2 '>{errorMessage}</p>

            <button onClick={handleButtonClick} className='py-4 my-6 bg-red-700 w-full rounded-lg'>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already A User? Sign In'}
            </p>
        </form>
    </div>
)
}

export default Login