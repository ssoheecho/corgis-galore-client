import fetch from 'isomorphic-fetch';

export function fetchComments() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS' })
    return fetch('http://localhost:3001/api/comments')
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_COMMENTS', payload: data}))
  }
}
