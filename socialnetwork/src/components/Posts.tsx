import React from 'react'
import { getTypeParameterOwner } from 'typescript';
import IconLike from '../img/like.png';

const Posts = ({ dataContent }: any) => {
    console.log('aqui ta mi datacongent', dataContent)
    const { firstName, title, picture, lastName } = dataContent.owner;
    const { publishDate,text,likes,image } = dataContent
    return (
        
    //   <>
    //         <div className="card">
    //             <div className="">
    //             <div className="cards-posts-two">
    //             <img src="img_avatar.png" alt="Avatar"/>
    //                 <div className="container">
    //                     <h4><b>John Doe</b></h4>
                      
    //                 </div>
    //                     </div>
    //                     </div>
    //                     </div>
    //   </>
        <div className="cards-posts">
            {/* <div className="cards-posts-two">
                <img src={picture} alt="" />
                <div className="dateInfo">
                  <h2>{title} {firstName} {lastName}</h2>
                  {publishDate}
                </div>
            </div> */}
            <div className="cards-post-three">
                <img src={image} alt=""/>

            </div>
            <div className="Likes">
                <img src={IconLike} alt="likes"/>
                {likes}
            </div>
        </div>
            )
}
            export default Posts;