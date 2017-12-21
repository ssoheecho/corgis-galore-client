import fetch from 'isomorphic-fetch';

export function fetchCorgis() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CORGIS' })
    return fetch('http://localhost:3001/api/corgis')
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_CORGIS', payload: data}))
  }
}
