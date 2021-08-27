import { useEffect,useState } from 'react';
import '../styles/index.css'
import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";
import { ModalUser } from './ModalUser';

export const ModalComments = ({ dataContentMessage }: any) => {

    const { setopenModalComments,idMsg} = dataContentMessage;
const GETCOMMENTS = gql`
query getMessage($id: String) {
    listComment(id:$id){
	data{
    id
    message
    post
    publishDate
    owner{
    id
    lastName
    firstName
    picture
    }

    
  }
  }
}`;
const {  data } = useQuery(GETCOMMENTS,
    {
     variables: {
      id: idMsg
    }});
const [openModalUser, setOpenModalUser] = useState(false);

    useEffect(() => {
  
    }, [data]);

    return (
     
            <div className="flex-container-comment">
           
            <div className="flex-item-comment">
               {data?.listComment?.data?.length>0?(
               <>
                <div className="">
                <span style={{paddingRight:5}}onClick={() => { setopenModalComments(false) }} className="close">&times;</span>
                  {  data?.listComment?.data?.map((cm: any) => (
                 
                       <>
                       <div className="comments">
                         <img onClick={() => { setOpenModalUser(true) }}src={cm.owner.picture} alt=""/>
                         <div className="cm">
                             <h3>{cm.owner.lastName}</h3>
                             <p>{cm.message}</p>

                         </div>
                         </div>
                         {openModalUser && <ModalUser dataContentUser={{setOpenModalUser, id : cm.owner.id}} />}
                         
                         </>
                     
                       
                    
                   ))}
                      </div>
           
               </>
               ): (<>
               <p style={{padding:20}}>No hay comentarios</p>
               </>)}
            </div>
       
            </div>
            
      
    )
}
