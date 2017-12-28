import fetch from 'isomorphic-fetch';

export function fetchComments() {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/comments')
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_COMMENTS', payload: data}))
  }
}

export function addComment(comment) {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/comments', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => dispatch( { type: 'ADD_COMMENT', payload: data }))
  }
}

export function updateLike(comment) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/${comment.id}`, {
      method: 'PATCH',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => console.log(res))
  }
}

export const removeComment = (comment) => {
  return {
    type: 'REMOVE_COMMENT',
    comment
  };
};
