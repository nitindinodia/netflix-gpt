import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => {
    return store.user;
  });

  const handleSignOut = () => {

    signOut(auth)
      .then(() => {

        // Sign-out successfully

        navigate('/');
      })

      .catch((error) => {
        navigate('/error');
      });

  }

  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>

      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='netflix-logo' />

      {/* <div className='flex p-2 gap-2'>
          
          <img className='w-9 h-9' src='https://avatars.githubusercontent.com/u/12824231?v=4' alt="user-icon" />
        
          
          <button onClick={handleSignOut} className='font-bold text-white '>Sign Out</button>

        </div> */}

      {user && (

        <div className='flex p-2 gap-2'>

          <img className='w-9 h-9' src={user?.photoURL} alt="user-icon" />

          <button onClick={handleSignOut} className='font-bold text-white '>Sign Out</button>

        </div>

      )}
      
    </div>

  )
}

export default Header