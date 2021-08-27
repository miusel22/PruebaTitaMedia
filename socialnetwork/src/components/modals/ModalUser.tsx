
import { useEffect } from 'react';
import '../styles/index.css'
import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";
export const ModalUser = ({ dataContentUser }: any) => {
    const { setOpenModalUser, id } = dataContentUser;

    const GETUSER = gql`
query getUser($id: String) {
user(id:$id){
id
title
firstName
lastName
gender
email
dateOfBirth
registerDate
phone
picture
location{
street
  state
  city
  country
  timezone  
}
}
}`;

    const { loading, data } = useQuery(GETUSER,
        {
            variables: {
                id: id
            }
        });


    useEffect(() => {

    }, [data]);


    return (

        <div>
            {loading ? (<div className="loader"></div>) : (<div className="modal">
                <div className="modal-content">
                    <span onClick={() => { setOpenModalUser(false) }} className="close">&times;</span>
                    <div className="modal-info">
                        <img src={data?.user.picture} alt="" />

                        <div className="modal-info-users">
                            <h1>{data?.user.title} {data?.user.firstName} {data?.user.lastName}</h1>
                            <h2>Register ddadate : {data?.user.registerDate}</h2>
                            <h2>Gender : {data?.user.gender}</h2>
                            <h2>Date of birth : {data?.user.dateOfBirth}</h2>
                            <h2>Phone : {data?.user.phone}</h2>
                            <h2>Email : {data?.user.email}</h2>
                            {/* <h2>Location :{data?.user?.location?.city}/{data?.user?.location?.country} </h2> */}


                        </div>
                    </div>
                </div>

            </div>)}

        </div>
    )
}
