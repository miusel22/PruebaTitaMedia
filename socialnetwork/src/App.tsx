
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './login';
import Mainpage from './mainPage';
import { useQuery } from "@apollo/client";
import gql from 'graphql-tag';
//@ts-ignore
import GETPOSTS from './graphqll/queries.graphql'

export const App = () => {
  const query = gql`
  {
    listPost{
    data{
      tags
    }
  }
  }`
  console.log('my query',query);
  const { loading,error, data} = useQuery(query, {
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    console.log('el error',error);
  },[data])


  const [user] = useAuthState(auth);
  return (
    <>

      {user ? <Mainpage /> : <Login />}

    </>

  );
}

