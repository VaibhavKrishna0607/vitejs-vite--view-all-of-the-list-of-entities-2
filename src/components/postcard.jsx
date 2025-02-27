import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({profileImage, username, content,isLiked}) => {
    return(
        <div className='postcard-details'>
            <h2>{profileImage}</h2>
            <h2>Username: {username}</h2>
            <h2>Content: {content}</h2>
            <LikeButton 

            
            />
        </div>
    )

}

export default PostCard;
