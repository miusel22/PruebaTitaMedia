import React, { useState } from 'react'
import IconLike from '../img/like.png';
import { ModalComments } from './modals/ModalComments';
import { ModalUser } from './modals/ModalUser';
import './styles/index.css'


const Posts = ({ dataContent }: any) => {

    const [openModalUser, setOpenModalUser] = useState(false);
    const [openModalComments, setopenModalComments] = useState(false);


    const { firstName, title, picture, lastName, id } = dataContent?.owner;
    const { publishDate, text, likes, image, tags } = dataContent
    const idMsg= dataContent.id;
  
    return (
        <>

            <div className="flex-container">

                <div className="flex-item" >
                    <div className="cards-posts-two">

                        <img onClick={() => { setOpenModalUser(true) }} src={picture} alt="" className="al-it" />
                        <div className="dateInfo">
                            <p>{title} {firstName} {lastName}</p>
                            <p> {publishDate}</p>

                        </div>
                    </div>
                    <div className="description">
                        <p>{text}</p>


                    </div>
                    <div className="tags">
                        {tags.map((tg: any) => (
                            <button className="user">{tg}</button>
                        ))}
                    </div>
                    <div className="cards-post-three">
                        <img src={image} alt="" className="img img-responsive" />

                    </div>
                    <div className="likes-and-comm">
                        <div className="likes">
                            <img src={IconLike} alt="likes" />
                            <p >{likes} Likes</p>
                            
                        </div>
                        <p style={{cursor:'pointer'}}onClick={() => { setopenModalComments(true) }}>Comments</p>

                    </div>
                   
                </div>

                            
            </div>
            {openModalComments && <ModalComments dataContentMessage={{setopenModalComments,idMsg,id}} />}
            {openModalUser && <ModalUser dataContentUser={{setOpenModalUser,id}} />}
        



        </>

    )
}
export default Posts;