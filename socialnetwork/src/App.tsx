
import React from 'react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './login';
import Mainpage from './main';
import {ShowUser } from './showUser';






export const App = () => {
  const [user] = useAuthState(auth);
  return (
    <>

      {user ? <Mainpage /> : <Login />}
      <ShowUser/>
    </>

  );
}

