
import { useEffect } from 'react';
import { Header } from './components/Header';
import { useQuery } from "@apollo/client";
import Posts from "./components/Posts"
import './styles/index.css'
import gql from 'graphql-tag';
import { useState } from 'react';
import { Search } from './components/Search';



const Mainpage = ({ TagsData }: any) => {



    const GETLIST = gql` 
    query getPosts {
        listPost{
            data{
                tags
                id
                image
                owner{
                id
                title
                picture
                firstName
                lastName
                }
            likes
            publishDate
            text

      
    }
  }
    }`


    const { loading, error, data } = useQuery(GETLIST);



    useEffect(() => {

    }, [data])

    const [tagState, setTagState] = useState("");
    if (tagState) {
        return (
            <>
                <Header />
                {error ? 'si,error' : (
                    <>
                        <div className="filters">
                            <h3>Search your favorite tag!</h3>
                            <select onChange={(e) => setTagState(e.target.value)}>

                                {TagsData?.map((tag: any) => (
                                    <option value={tag}>{tag}</option>

                                ))}
                            </select>
                        </div>
                        <Search query={tagState} />
                    </>
                )}

            </>
        )
    } else {

    }
    return (
        <>
            <Header />
            {error ? (<div  className="loader"></div>) : (
                <div className="body-main-page">

                    <div className="filters">
                        <h3>Search your favorite tag!</h3>
                        <select onChange={(e) => setTagState(e.target.value)}>

                            {TagsData?.map((tag: any) => (
                                <option value={tag}>{tag}</option>

                            ))}
                        </select>
                    </div>

                    {loading ? (<div className="loader"></div>) : (
                        data.listPost.data.map((p: any) => (
                            <Posts dataContent={p} />

                        )))
                    }
                    {tagState}


                </div>
            )}

        </>
    );
}

export default Mainpage;