import { useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";
import Posts from "./Posts";
export const Search = ({ query }: any) => {

  const Search = gql`
query getTags($tag:String){
getTags(tag:$tag){
data{
id
text
image
likes
tags
owner{
  id
  title
  firstName
  lastName
  picture
}
publishDate
  }
  }
}
`;
  const { loading, data } = useQuery(Search,
    {
      variables: {
        tag: query
      }
    });

  useEffect(() => {

  }, [data]);
  console.log('aqui ta data', data);
  return (

    <div>
      {loading ? (<div className="loader"></div>) : (

        data.getTags.data.length > 0 ? (

          data.getTags.data.map((p: any) => (
            <Posts dataContent={p} />

          )
          ))

          : 'Post not found')



      }


    </div>
  )
}
