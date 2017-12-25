import React from 'react';

const Comment = ({ comment }) => {
  return(
    <div>
      <li>
        {comment.content}
      </li>
    </div>
  )
}


export default Comment;
