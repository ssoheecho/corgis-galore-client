import React from 'react';

const Comment = ({ comment }) => {
  return(
      <li>
        {comment.content}
      </li>
   )
}


export default Comment;
