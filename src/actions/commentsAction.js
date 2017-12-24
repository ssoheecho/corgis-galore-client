import fetch from 'isomorphic-fetch';

export function fetchComments() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS' })
    return fetch('http://localhost:3001/api/comments')
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_COMMENTS', payload: data}))
  }
}

export function addComment(comment) {
  return (dispatch) => {
    dispatch({ type: 'ADDING_COMMENT'})
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
