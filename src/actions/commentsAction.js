import fetch from 'isomorphic-fetch';

export function fetchComments() {
  return (dispatch) => {
    return fetch('https://corgis-galore-api.herokuapp.com/api/comments')
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_COMMENTS', payload: data}))
  }
}

export function addComment(comment) {
  return (dispatch) => {
    return fetch('https://corgis-galore-api.herokuapp.com/api/comments', {
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

export function updateLikes(updateInfo) {
  return (dispatch) => {
    return fetch(`https://corgis-galore-api.herokuapp.com/api/comments/${updateInfo.id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'UPDATE_LIKES', payload: data }))
  }
}

export const removeComment = (comment) => {
  return {
    type: 'REMOVE_COMMENT',
    comment
  };
};
