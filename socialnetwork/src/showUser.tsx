import {
    ApolloProvider, useQuery, gql
} from "@apollo/client";

//@ts-ignore
import getUser from './graphql/getDataUser.gql';

export const ShowUser = () => {


const USER = gql`
query ($id:String) {
documents(id:$id){
id
  title
  firstName
  lastName
  gender
  email
  registerDate
  phone
  picture
  location
  
   }
  }
  
  `;
    const { loading, error, data } = useQuery(USER, {
        variables: {
            id: '60d0fe4f5311236168a109ca'
        }
    })
    console.log('esta es mi data', data);
    console.log('error',error)

    return (
        <div>
            {loading ? 'loading..' : error ? 'error :c' : data}
        </div>
    )
}
