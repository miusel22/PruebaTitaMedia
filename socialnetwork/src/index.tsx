import ReactDOM from 'react-dom';
import { App } from './App';
import {
  ApolloProvider, useQuery, gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';



const httpLink = createHttpLink({
  uri: 'https://dummyapi.io/data/v1/user',
  // headers:{
  //  'app-id': '6125aa9741f5f5587fa0d804'
  // }
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const id = 'api-key=6125aa9741f5f5587fa0d804'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: id ? `Bearer ${id}` : "",
      }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});



ReactDOM.render(
  <>
    <ApolloProvider client={client}>
      <App />
     
    </ApolloProvider>,

  </>,
  document.getElementById('root')
);


