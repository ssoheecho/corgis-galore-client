import React from 'react';

const Comment = ({ key, comment }) => {
  return(
    <li>
      {comment.content}
    </li>
   )
}


export default Comment;
