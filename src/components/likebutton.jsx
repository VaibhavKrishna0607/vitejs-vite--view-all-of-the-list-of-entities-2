
import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? 'red' : 'gray'
      }}
    >
      {liked ? 'Liked!' : 'Like Here'}
    </button>
  );
};

export default LikeButton;
