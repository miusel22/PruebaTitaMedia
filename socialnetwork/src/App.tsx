import { useEffect } from 'react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/login';
import Mainpage from './mainPage';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";



///import GETPOSTS from './graphqll/queries.graphql'

export const App = () => {
  const GETTAG = gql`
  query getTag {
  listTag{
  data
  }
}
`

const {data } = useQuery(GETTAG);
  const [user] = useAuthState(auth);
  useEffect(() => {
 
}, [data])
  return (
    <>
      {user ? (
      
      <Mainpage TagsData={data?.listTag.data}/>) : <Login />}
    </>
  );
}